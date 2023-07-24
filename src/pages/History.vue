<template>
    <div>
        <div class="flex justify-between items-end mb-4">
        <PageTitle text="History"/>
        <Button type="button" @click="clickHandler" text="Add record" />
        <Teleport to="body" v-if="createOpen">
            <ModalWindow @click.stop="clickHandler">
                <HistoryForm :mode="MODE.CREATE" @click.stop="false"/>
            </ModalWindow>
        </Teleport>
    </div>
    <hr>
    <div>
        <Table 
            :list="historyList"
            :item-component="HistoryItem"
        ></Table>
    </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import ModalWindow from '../components/ModalWindow.vue';
    import Button from '../components/Button.vue';
    import { MODE } from '../constants/formModes';
    import HistoryForm from '../components/HistoryForm.vue';
    import HistoryItem from '../components/HistoryItem.vue';
    import Table from '../components/Table.vue';
    import PageTitle from '@/components/PageTitle.vue';
    
    const createOpen = ref(false);
    const clickHandler = () => createOpen.value = false;

    const historyList = [
        { name: 'Tea', limit: 10, id: '0', },
        { name: 'Tea', limit: 10, id: '1', }
    ];

</script>

<style scoped>

</style>