<template>
    <div class="flex justify-between items-end mb-4">
        <PageTitle text="Planning"/> 
        <Button type="button" text="Plan expenses" @click="modalOpen=true"/>
        <Teleport to="body">
            <ModalWindow @click.stop="clickHandler" :is-open="modalOpen">
                <PlanForm :mode="MODE.CREATE" @click.stop="false"/>
            </ModalWindow>
        </Teleport>
    </div>
    <hr />
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import PageTitle from '@/components/PageTitle.vue';
import { MODE } from '@/constants/formModes';
import ModalWindow from '@/components/ModalWindow.vue';
import { ref } from 'vue';
import PlanForm from '@/components/PlanForm.vue';

const modalOpen = ref(false);
const clickHandler = () => modalOpen.value=false;

</script>

<style scoped>

</style>