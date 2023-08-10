<template>
    <table class="grid w-full mt-6">
        <thead :class="rowClass" >
            <th v-for="op in options" :key="op.id" :id="op.id" class="text-left">
                {{  op.title }}
                <div class="relative inline sort-icon" @click="sortHandler(op.id)" v-if="op.sorted">
                    <span class="absolute" v-if="op.id !== sortOption || isSortDown || !isSortDown && !isSortUp"><Icon :icon="sortDown" :size="20"/></span>
                    <span class="absolute" v-if="op.id !== sortOption || isSortUp || !isSortDown && !isSortUp"><Icon :icon="sortUp" :size="20"/></span>
                </div>
            </th>
            <th class="text-left"><slot name="last-th"></slot></th>
        </thead>
        <tbody>
            <transition-group name="list">
                <tr v-for="tr in sortedList" :key="tr.id" :class="rowClass">
                    <td v-for="op in options">{{ op.getField && op.getField(tr) || tr[op.id] }}</td>
                    <td class="text-right"><slot name="last-td" :id="tr.id"></slot></td>
                </tr>
            </transition-group>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { TableOptions } from '.';
    import Icon from '../Icon.vue';
    import sortDown from  '@/assets/sort-down.svg';
    import sortUp from '@/assets/sort-up.svg';
    
    const props = defineProps<{
        list: any;
        options: TableOptions<any, any>[];
    }>();

    const isSortDown = ref<boolean>(false);
    const isSortUp = ref<boolean>(false);
    const sortOption = ref<string>('')

    const sortHandler = (option: string) => {
        if (!isSortDown.value && !isSortUp.value){
            isSortDown.value = true;
        } else if ( isSortDown.value && !isSortUp.value) {
            isSortDown.value = false;
            isSortUp.value = true;
        } else {
            isSortUp.value = false;
        }

        sortOption.value = option;
    }

    const rowClass = computed(() => ([
        'grid',
        'auto-cols-max',
        'py-2', 'px-4',
        'border-b',
        'border-gray-200',
        {'grid-cols-5': Object.keys(props.options).length+1 == 5},
        {'grid-cols-3': Object.keys(props.options).length+1 == 3},
    ]));

    const sortedList = computed<any[]>(() => { 
        if (isSortDown.value){
            return Object.values(props.list).sort((a: any, b: any) => a[sortOption.value] >= b[sortOption.value] ? -1 : 1);
        };

        if (isSortUp.value){
            return Object.values(props.list).sort((a: any, b: any) => a[sortOption.value] <= b[sortOption.value] ? -1 : 1);
        }; 
        
        return Object.values(props.list);
    })
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.sort-icon{

}
</style>