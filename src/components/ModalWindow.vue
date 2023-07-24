<template>
    <Transition name="back">
        <div v-if="isOpen" class="absolute m-auto w-full h-full top-0 left-0 bga flex items-center justify-center">
            <Transition name="front">
            <div class="content bg-white w-1/2">
                <slot></slot>
            </div>
            </Transition>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    defineProps<{
        isOpen: boolean
    }>();
</script>

<style scoped>
.back-enter-active, 
.back-leave-active{
    transition: opacity 0.5s ease;
}
.back-enter-from,
.back-leave-to{
    opacity: 0;
}
.bga{
    background-color: rgba(0,0,0,0.8);
}

</style>