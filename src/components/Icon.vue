<template>
    <component :is="icon" :width="size" :height="size"></component>
</template>

<script setup lang="ts">
    defineProps<{
        icon: any;
        size: number;
    }>();
</script>

<style scoped>

</style>