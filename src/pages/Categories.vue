<template>
    <div class="flex justify-between items-end mb-4">
        <PageTitle text="Categories"/>
        <Button type="button" text="Create category" @click="toggleModal()" />
    </div>
    <hr>
    <CategoryTable />
    <ModalWindow @close="toggleModal()" :is-open="modalOpen">
        <CategoryForm :mode="MODE.CREATE" @done="toggleModal()"/>
    </ModalWindow>
</template>

<script setup lang="ts">
    import PageTitle from '@/ui/PageTitle.vue';
    import Button from '@/ui/Button.vue';
    import CategoryForm from '@/modules/CategoryForm/CategoryForm.vue';
    import CategoryTable from '@/modules/CategoryTable/CategoryTable.vue';
    import { MODE } from '@/constants/formModes';
    import { useModalWindow } from '@/ui/ModalWindow/useModalWindow';
    import ModalWindow from '@/ui/ModalWindow/ModalWindow.vue';

    const { modalOpen, toggleModal } = useModalWindow();
</script>

<style scoped>

</style>