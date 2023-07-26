<template>
    <div class="input-container mb-4">
        <label :for="id" class="block mb-1">{{ label }}</label>
        <input v-model="value" :placeholder="placeholder" :type="type" :id="id" :class="inputClass"/>
        <small class="block text-red-800">{{ error }}</small>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps<{
        id: string;
        label: string;
        type: 'number' | 'text' | 'mail' | 'password';
        placeholder?: string;
        error: string;
        modelValue: any
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
    
</style>