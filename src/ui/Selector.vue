<template>
    <div class="input-container mb-4">
        <label :for="id" class="block mb-1">{{ label }}</label>
        <select :class="inputClass" v-model="value">
            <option v-for="[value, title] in options" :value="value">{{ title }}</option>
        </select>
        <small class="block text-red-800">{{ error }}</small>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    options: [string | number, string][]
    id: string;
    label: string;
    error: string;
    modelValue: any;
}>();

const emit = defineEmits<{
    'update:modelValue': [value: any]
}>();

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
});

const inputClass = computed(() => 'block w-full px-3 py-1 border font-thin outline-lime-500');
</script>

<style scoped>
.defaultValue{
    color: gray;
}
</style>