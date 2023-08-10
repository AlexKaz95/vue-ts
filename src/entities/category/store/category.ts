
import { defineStore } from "pinia";
import { CategoryList, CategoryId, Category } from "../types";

type State = {
    categories: CategoryList;
    nextId: CategoryId;
};

export const useCategoryStore = defineStore('categoryStore', {
    state: (): State => ({
        categories: {
            '1': {id: '1', name: 'Home', limit: 1000, unlimited: false},
            '2': {id: '2', name: 'Girlfriend', limit: 2000, unlimited: false},
            '3': {id: '3', name: 'Food', limit: 4000, unlimited: false},
            '4': {id: '4', name: 'Restorations', limit: 9000, unlimited: false},
            '5': {id: '5', name: 'Health', unlimited: true},
        },
        nextId: '7'
    }),
    getters: {
        getCategoryById(state: State): (id: CategoryId) => Category {
            return (id) => state.categories[id];
        },
        categoryNames(state: State): string[] {
            return Object.values(state.categories).map(cat => cat.name);
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