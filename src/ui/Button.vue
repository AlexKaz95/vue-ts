<template>
    <button 
        :type="type" 
        :class="[buttonClass, {disabled: disabled}]" 
        @click="handler" 
        :disabled="disabled"
    >
        {{text}}
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

    const props = defineProps<{
        type: 'submit' | 'button';
        text: string;
        disabled?: boolean;
    }>();

    const emits = defineEmits<{
        click: [];
    }>();

    const handler = (e: Event) => {
        if (props.type == 'button'){
            e.preventDefault();
            emits('click');
        } 
    }

    const buttonClass = computed(() => ([
        'self-end',
        'bg-lime-600',
        'text-sm',
        'py-2',
        'px-4',
        'uppercase',
        'text-white',
        'font-bold',
        'rounded-md',
        'hover:bg-lime-500',
        'hover:transition-colors',
    ]))
</script>

<style scoped>
.disabled{
    color: #999;
    background-color: #ccc;
}
</style>