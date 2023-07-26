<template>
    <div class="flex justify-between items-end mb-4">
       <PageTitle text="Categories"/>
        <Button type="button" @click="openForm(MODE.CREATE)" text="Create category" />
        <Teleport to="body">
            <ModalWindow @click.stop="closeForm()" :is-open="modalOpen">
                <CategoryForm :mode="selectedMode" :selected-category-id="selectedId" @click.stop="false" @done="closeForm"/>
            </ModalWindow>
        </Teleport>
    </div>
    <hr>
    <div>
        <Table 
            :options="tableOptions"
            :list="categoryList"
        >
            <template #last-td="props">
                <div class="actions gap-2 justify-self-end inline-flex">
                    <span @click="openForm(MODE.EDIT, props.id)"><Icon :icon="editIcon" :size="24"/></span>
                    <span @click="deleteCategory(props.id)"><Icon :icon="deleteIcon" :size="24" class="text-red-400"/></span>
                </div>
            </template>
        </Table>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import ModalWindow from '@/ui/ModalWindow.vue';
    import PageTitle from '@/ui/PageTitle.vue';
    import Button from '@/ui/Button.vue';
    import { Table, type TableOptions } from '@/ui/Table';
    import CategoryForm from '@/modules/CategoryForm/CategoryForm.vue';
    import { MODE } from '@/constants/formModes';
    import { CategoryId, CategoryOptions } from '@/entities';
    import { useCategoryStore } from '@/store/category';
    import editIcon from '@/assets/edit-svgrepo-com.svg';s
    import deleteIcon from '@/assets/delete-2-svgrepo-com.svg';
    import Icon from '@/ui/Icon.vue';

    const categoryStore = useCategoryStore();
    const modalOpen = ref(false);
    const selectedId = ref();
    const selectedMode = ref(MODE.CREATE);

    const categoryList = computed(() => categoryStore.categories);

    const openForm = (mode?: MODE, id?: CategoryId) => {
        console.log(id)
        if (mode) selectedMode.value = mode;
        selectedId.value = id;
        
        modalOpen.value = true;
    };

    const closeForm = () => modalOpen.value = false;
    const deleteCategory = (id: CategoryId) => categoryStore.delete(id);

    const tableOptions: TableOptions<CategoryOptions>[] = [
        {id: 'name', title: 'Name'},
        {id: 'limit', title: 'Spent limit'},
    ]
</script>

<style scoped>

</style>