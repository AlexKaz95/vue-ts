<template>
    <div class="relative grid grid-row-3">
        <div @click="clickHandler">
            <slot name="button"></slot>
        </div>
        <div class="border border-lime-400 w-max rounded-md absolute bg-white top-[calc(100%+6px)] right-0" v-if="isOpen" @click="isOpen=false">
            <slot name="drop"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const clickHandler = () => {
    isOpen.value = !isOpen.value;
};

</script>

<style scoped>

</style>