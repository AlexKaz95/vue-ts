<template>
    <div class="input-container mb-4">
    <label :for="id" class="block mb-1">{{ label }}</label>
    <select :class="inputClass">
        <option v-for="option in options">{{  option }}</option>
    </select>
    <small class="block text-red-800">{{ error }}</small>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineProps<{
    options: string[]
    id: string;
    label: string;
    error: string;
    modelValue: any;
}>();

const inputClass = computed(() => 'block w-full px-3 py-1 border font-thin outline-lime-500');
</script>

<style scoped>

</style>