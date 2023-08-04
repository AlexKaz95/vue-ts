<template>
    <form action="" class="mb-4" @submit.prevent="emits('submit', form)">
        <slot name="fields" :form="form" :valid="valid"></slot>
    </form>
</template>

<script setup lang="ts">
import { useForm } from './hooks/useForm';
import { UseFormOptions } from './types';

const props = defineProps<{
    initConfig: UseFormOptions;
}>();
const emits = defineEmits<{
    submit: [any];
}>()

const {form, valid} = useForm(props.initConfig);
</script>

<style scoped>

</style>