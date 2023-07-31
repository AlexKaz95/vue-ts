<template>
    <Table 
        :options="tableOptions"
        :list="categoryList"
    >
        <template #last-td="props">
            <div class="actions gap-2 justify-self-end inline-flex">
                <EditIconButton @click="openEditForm(props.id)"/>
                <DeleteIconButton @click="deleteCategory(props.id)"/>
            </div>
        </template>
    </Table>
    <ModalWindow @close="toggleModal()" :is-open="modalOpen">
        <CategoryForm :mode="MODE.EDIT" :selected-category-id="selectedId" @done="toggleModal()"/>
    </ModalWindow>
</template>

<script setup lang="ts">
    import { Table, type TableOptions } from '@/ui/Table';
    import ModalWindow from '@/ui/ModalWindow/ModalWindow.vue';
    import CategoryForm from '@/modules/CategoryForm/CategoryForm.vue';
    import DeleteIconButton from '@/components/DeleteIconButton.vue'
    import EditIconButton from '@/components/EditIconButton.vue'
    import { MODE } from '@/constants/formModes';
    import { CategoryId, CategoryOptions } from '@/entities';
    import { useModalWindow } from '@/ui/ModalWindow/useModalWindow';
    import { useCategoryStore } from '@/store/category';
    import { computed, ref } from 'vue';

    const tableOptions: TableOptions<CategoryOptions>[] = [
        {id: 'name', title: 'Name'},
        {id: 'limit', title: 'Spent limit'},
    ];
    
    const selectedId = ref();
    const categoryStore = useCategoryStore();
    const { modalOpen, toggleModal } = useModalWindow();

    const categoryList = computed(() => categoryStore.categories);

    const openEditForm = (id: CategoryId) => { selectedId.value = id; toggleModal() };
    const deleteCategory = (id: CategoryId) => categoryStore.delete(id);
</script>

<style scoped>

</style>