import { Category, CategoryId, CategoryList } from "@/entities";
import { defineStore } from "pinia";

type State = {
    categories: CategoryList;
    nextId: CategoryId;
};

export const useCategoryStore = defineStore('categoryStore', {
    state: (): State => ({
        categories: {
            '1': {id: '1', name: 'Home', limit: 1000},
            '2': {id: '2', name: 'Girlfriend', limit: 2000},
            '3': {id: '3', name: 'Food', limit: 4000},
            '4': {id: '4', name: 'Restorations', limit: 9000},
            '5': {id: '5', name: 'Health', limit: 100},
            '6': {id: '6', name: 'Other', limit: 10}
        },
        nextId: '7'
    }),
    getters: {
        getCategoryById(state: State): (id: CategoryId) => Category {
            return (id) => state.categories[id];
        }
    },
    actions: {
        add(data: Category){
            this.categories[this.nextId] = data;
            this.nextId = (+this.nextId+1).toString();
            console.log(this.nextId)
        },

        delete(id: CategoryId){
            delete this.categories[id];
        },

        update(data: Category, id: CategoryId){
            this.categories[id] = data;
        }
    },
})