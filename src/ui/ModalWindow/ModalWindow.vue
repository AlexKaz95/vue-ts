<template>
    <Teleport to="body">
        <Transition name="back">
            <div v-if="isOpen" class="absolute m-auto w-full h-full top-0 left-0 bga flex items-center justify-center" @click.stop="$emit('close')">
                <div class="content bg-white w-1/2" @click.stop="false">
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
    defineEmits<{
        'close': []
    }>();

    defineProps<{
        isOpen: boolean
    }>();
</script>

<style scoped>
.back-enter-active, 
.back-leave-active{
    transition: opacity 0.2s ease;
}
.back-enter-from,
.back-leave-to{
    opacity: 0;
}
.bga{
    background-color: rgba(0,0,0,0.8);
}

</style>