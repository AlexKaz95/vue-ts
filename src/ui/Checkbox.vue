<template>
    <div class="input-container mb-4">
        <input v-model="value" :placeholder="placeholder" type="checkbox" :id="id" class="custom-checkbox"/>
        <label :for="id" class="block">{{ label }}</label>
        <small class="block text-red-800 absolute">{{ error }}</small>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps<{
        id: string;
        label: string;
        placeholder?: string;
        error: string;
        modelValue: any
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
</script>

<style scoped>
    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .custom-checkbox+label {
        display: flex;
        align-items: center;
        user-select: none;
    }
    .custom-checkbox+label::before {
        content: ' ';
        display: inline-block;
        width: 1.4em;
        height: 1.4em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #ddd;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
    .custom-checkbox:checked+label::before {
        border-color: #0b76ef;
        background-color: #0b76ef;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }

    /* стили при наведении курсора на checkbox */
    .custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
     border-color: #b3d7ff;
    }
    /* стили для активного состояния чекбокса (при нажатии на него) */
    .custom-checkbox:not(:disabled):active+label::before {
        background-color: #b3d7ff;
        border-color: #b3d7ff;
    }
    /* стили для чекбокса, находящегося в состоянии disabled */
    .custom-checkbox:disabled+label::before {
        background-color: #e9ecef;
    }
</style>