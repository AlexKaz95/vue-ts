<template>
    <div class="input-container mb-4 relative" :class="{disabled}">
        <label :for="id" class="block mb-1">{{ label }}</label>
        <input v-model="value" :id="id" :class="inputClass" v-bind="$attrs" :disabled="disabled"/>
        <Transition name="error" v-show="error">
            <small class="block text-red-800 absolute error">{{ error }}</small>
        </Transition>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps<{
        id: string;
        label: string;
        error?: string;
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

    .error{
        padding: 4px 10px;
        position: absolute;
        /* top: -4px; */
        right: 0;
        bottom: 40px;
        background: #fff;
        box-shadow: 0px 1px 2px #ccc;
        z-index: 2;
        max-width: 270px;
        word-break: normal;
        border-radius: 4px;
    }

    .error-enter-active{
        transition: opacity 0.5s ease;
    }

    .error-enter-from {
        opacity: 0;
    }
</style>