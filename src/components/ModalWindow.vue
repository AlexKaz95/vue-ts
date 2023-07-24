<template>
    <div class="absolute m-auto w-full h-full top-0 left-0 bga flex items-center justify-center">
        <div class="content bg-white w-1/2">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .bga{
        background-color: rgba(0,0,0,0.8);
    }
</style>