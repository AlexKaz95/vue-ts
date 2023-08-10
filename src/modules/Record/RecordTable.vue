<template>
    <Table 
        :options="tableOptions"
        :list="categoryList"
    >
        <template #last-td="props">
            <div class="actions gap-2 justify-self-end inline-flex">
                <EditIconButton @click="openEditForm(props.id)"/>
                <DeleteIconButton @click="deleteRecord(props.id)"/>
            </div>
        </template>
    </Table>
    <ModalWindow @close="toggleModal()" :is-open="modalOpen">
        <RecordForm :mode="MODE.EDIT" :selected-record-id="selectedId" @done="toggleModal()"/>
    </ModalWindow>
</template>

<script setup lang="ts">
    import ModalWindow from '@/ui/ModalWindow/ModalWindow.vue';
    import DeleteIconButton from '@/components/DeleteIconButton.vue'
    import EditIconButton from '@/components/EditIconButton.vue'
    import { computed, ref } from 'vue';
    import { useRecordStore } from '@/entities/record/store/records';
    import { RecordId, RecordOptions, Record } from '@/entities/record/types';
    import { useModalWindow } from '@/ui/ModalWindow/useModalWindow';
    import { TableOptions, Table } from '@/ui/Table';
    import { MODE } from '@/shared/constants/formModes';
    
    const tableOptions: TableOptions<RecordOptions, Record>[] = [
        {id: 'title', title: 'Title', sorted: true},
        {id: 'date', title: 'Date', sorted: true},
        {id: 'spent', title: 'Spent', sorted: true},
        {id: 'categoryId', title: 'Category', sorted: true},
    ];
    
    const selectedId = ref();
    const recordStore = useRecordStore();
    const { modalOpen, toggleModal } = useModalWindow();

    const categoryList = computed(() => recordStore.records);

    const openEditForm = (id: RecordId) => { selectedId.value = id; toggleModal() };
    const deleteRecord = (id: RecordId) => recordStore.delete(id);
</script>

<style scoped>

</style>@/ui/ModalWindow/useModalWindow@/ui/Table