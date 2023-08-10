<template>
    <div class="flex justify-between items-end mb-4">
        <PageTitle text="Records" />
        <Button type="button" @click="toggleModal" text="New Record" />
    </div>
    <hr>
    <ModalWindow :is-open="modalOpen" @close="toggleModal">
        <RecordForm :mode="MODE.CREATE" @done="toggleModal()"/>
    </ModalWindow>
    <RecordTable />
</template>

<script setup lang="ts">
import RecordForm from '@/modules/Record/RecordForm.vue';
import ModalWindow from '@/ui/ModalWindow/ModalWindow.vue';
import { useModalWindow } from '@/ui/ModalWindow/useModalWindow';
import PageTitle from '@/ui/PageTitle.vue';
import Button from '@/ui/Button.vue';
import RecordTable from '@/modules/Record/RecordTable.vue';
import { MODE } from '@/shared/constants/formModes'

const {modalOpen, toggleModal} = useModalWindow()

</script>

<style scoped>

</style>