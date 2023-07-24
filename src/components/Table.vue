<template>
    <div class="w-full grid">
        <component v-for="item in list" :is="itemComponent" :item="item"></component>
    </div>
</template>

<script setup lang="ts">

    defineProps<{
        list: any[];
        itemComponent: any;
    }>();
</script>

<style scoped>

</style>