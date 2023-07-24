<template>
    <div class="flex justify-between items-end mb-4">
       <PageTitle text="Categories"/>
        <Button type="button" @click="clickHandler" text="Create category" />
        <Teleport to="body">
            <ModalWindow @click.stop="clickHandler" :is-open="createOpen">
                <CategoryForm :mode="MODE.CREATE" @click.stop="false"/>
            </ModalWindow>
        </Teleport>
    </div>
    <hr>
    <div>
        <Table 
            :list="categoryList"
            :item-component="CategoryItem"
        ></Table>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import CategoryForm from '../components/CategoryForm.vue';
    import ModalWindow from '../components/ModalWindow.vue';
    import Table from '../components/Table.vue';
    import CategoryItem from '../components/CategoryItem.vue';
    import { MODE } from '../constants/formModes';
    import Button from '../components/Button.vue';
    import PageTitle from '@/components/PageTitle.vue'; 
    //@ts-ignore
    import { useStore } from 'vuex';  

    const store = useStore();
    const createOpen = ref(false)
    const categoryList = computed(() => store.state.categoryList);
    const clickHandler = () => createOpen.value = !createOpen.value;
</script>

<style scoped>

</style>