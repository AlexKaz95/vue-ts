<template>
    <ModalWindow :is-open="true">
        <LoginForm />
    </ModalWindow>
</template>

<script setup lang="ts">
import LoginForm from '@/modules/Login/LoginForm.vue';
import ModalWindow from '@/ui/ModalWindow/ModalWindow.vue';

</script>

<style scoped>

</style>