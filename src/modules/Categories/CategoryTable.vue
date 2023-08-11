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
    import { TableOptions, Table } from '@/ui/Table';
    import ModalWindow from '@/ui/ModalWindow/ModalWindow.vue';
    import { MODE } from '@/shared/constants/formModes';
    import DeleteIconButton from '@/components/DeleteIconButton.vue';
    import EditIconButton from '@/components/EditIconButton.vue';
    import { computed, ref } from 'vue';
    import { useCategoryStore } from '@/entities/category/store/category';
    import { CategoryOptions, CategoryId, Category } from '@/entities/category/types';
    import { useModalWindow } from '@/ui/ModalWindow/useModalWindow';
    import CategoryForm from './CategoryForm.vue';

    const tableOptions: TableOptions<CategoryOptions, Category>[] = [
        {
            id: 'name', 
            title: 'Name', 
            sorted: true,
        },
        {
            id: 'limit', 
            title: 'Spent limit', 
            sorted: true,
            getField: (field) => field.unlimited ? 'Unlimited' : (field.limit?.toString() || ''),
            sortUp: (list) => {
                return Object.values(list).sort((a: any, b: any) => {
                    if (a.unlimited && b.unlimited) return 0;
                    if (a.unlimited) return 1;
                    if (b.unlimited) return -1;
                    return a.limit.value <= b.limit.value ? -1 : 1
                });
            },
            sortDown: (list) => {
                return Object.values(list).sort((a: any, b: any) => {
                    if (a.unlimited && b.unlimited) return 0;
                    if (a.unlimited) return -1;
                    if (b.unlimited) return 1;
                    return a.limit.value >= b.limit.value ? 1 : -1
                });
            }
        },
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