<template>
    <table class="grid w-full mt-6">
        <thead :class="rowClass">
            <th v-for="op in options" :key="op.id" :id="op.id" class="text-left">{{  op.title }}</th>
            <th class="text-left"><slot name="last-th"></slot></th>
        </thead>
        <tbody>
            <transition-group name="list">
                <tr v-for="tr in list" :key="tr.id" :class="rowClass">
                    <td v-for="op in options">{{ tr[op.id] }}</td>
                    <td class="text-right"><slot name="last-td" :id="tr.id"></slot></td>
                </tr>
            </transition-group>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { TableOptions } from '.';
    
    const props = defineProps<{
        list: any;
        options: TableOptions<any>[];
    }>();

    const rowClass = computed(() => ([
        'grid',
        'auto-cols-max',
        'py-2', 'px-4',
        'border-b',
        'border-lime-400',
        `grid-cols-${(Object.keys(props.options).length+1)}`,
    ]))
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
</style>