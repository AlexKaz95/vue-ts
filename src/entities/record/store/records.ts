
import { defineStore } from "pinia";
import { RecordList, RecordId, Record } from "../types";

type State = {
    records: RecordList;
    nextId: RecordId;
};

export const useRecordStore = defineStore('recordStore',{
    state: (): State => ({
        records: {
            '1': {
                date: 2134567879,
                id: '1',
                title: 'First spent',
                spent: 400,
                categoryId: '0'
            },
        },
        nextId: '2',
    }),
    actions:{
        add(data: Record){
            this.records[this.nextId] = data;
            this.nextId = (+this.nextId+1).toString();
        },

        delete(id: RecordId){
            delete this.records[id];
        },

        update(data: Record, id: RecordId){
            this.records[id] = data;
        }
    },
    getters: {
        getRecordById(state: State): (id: RecordId) => Record {
            return (id) => state.records[id];
        },
    }
})