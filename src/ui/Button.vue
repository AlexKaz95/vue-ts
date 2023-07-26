<template>
    <button :type="type" :class="buttonClass" @click.prevent="$emit('click')">{{text}}</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

    defineProps<{
        type: 'submit' | 'button';
        text: string;
        disabled?: boolean;
    }>();

    defineEmits<{
        click: [];
    }>();

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
</style>