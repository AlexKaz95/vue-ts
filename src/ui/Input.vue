<template>
    <div class="input-container mb-4" :class="{disabled}">
        <label :for="id" class="block mb-1">{{ label }}</label>
        <input v-model="value" :id="id" :class="inputClass" v-bind="$attrs" :disabled="disabled"/>
        <small class="block text-red-800 absolute">{{ error }}</small>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps<{
        id: string;
        label: string;
        error: string;
        modelValue: any;
        disabled?: boolean;
    }>();

    const emit = defineEmits<{
        'update:modelValue': [value: any]
    }>();

    const inputClass = computed(() => 'block w-full px-3 py-1 border font-thin outline-lime-500');

    const value = computed({
        get() {
            return props.modelValue
        },
        set(value) {
            emit('update:modelValue', value)
        }
    });


</script>

<style scoped>
    .disabled label{
        color: gray;
    }
</style>