//@ts-ignore
import { createStore } from 'vuex';

export const store = createStore({
    state: {
        categoryList: {
            '1': {id: '1', name: 'Home', limit: 1000},
            '2': {id: '2', name: 'Girlfriend', limit: 2000},
            '3': {id: '3', name: 'Food', limit: 4000},
            '4': {id: '4', name: 'Restorations', limit: 9000},
            '5': {id: '5', name: 'Health', limit: 100},
            '6': {id: '6', name: 'Other', limit: 10}
        },
        lastId: 6,
    },
    mutations: {
        ['ADD_CATEGORY'](state, payload){
            state.categoryList[state.lastId++] = {
                id: state.lastId,
                ...payload.cat
            };
        },
        ['UPDATE_CATEGORY'](state, payload){
            state.categoryList[payload.id] = {
                ...payload
            };
        }
    }
})