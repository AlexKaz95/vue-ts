<template>
    <div class="flex justify-between items-end mb-4">
        <h1 class="text-2xl font-bold">Categories</h1>
        <Button type="button" @click="clickHandler" text="Create category" />
        <Teleport to="body" v-if="createOpen">
            <ModalWindow @click.stop="clickHandler">
                <CategoryForm :mode="MODE.CREATE" @click.stop="false"/>
            </ModalWindow>
        </Teleport>
    </div>
    <hr>
    <div>
        <Table 
            :list="categoriesList"
            :item-component="CategoryItem"
        ></Table>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import CategoryForm from '../components/CategoryForm.vue';
    import ModalWindow from '../components/ModalWindow.vue';
    import Table from '../components/Table.vue';
    import CategoryItem from '../components/CategoryItem.vue';
    import { MODE } from '../constants/formModes';
    import Button from '../components/Button.vue';
    

    const createOpen = ref(false)
    const clickHandler = () => {
        createOpen.value = !createOpen.value;
    }

    const categoriesList = [
        {name: 'Home', limit: 1000},
        {name: 'Girlfriend', limit: 2000},
        {name: 'Food', limit: 4000},
        {name: 'Restorations', limit: 9000},
        {name: 'Health', limit: 100},
        {name: 'Other', limit: 10}
    ];
</script>

<style scoped>

</style>