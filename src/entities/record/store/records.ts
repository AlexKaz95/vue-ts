import { RecordId, RecordList } from "@/entities";
import { defineStore } from "pinia";

type State = {
    records: RecordList;
    nextId: RecordId;
};

export const useRecordStore = defineStore('recordStore',{
    state: (): State => ({
        records: {},
        nextId: '1',
    }),
    actions:{

    }
})