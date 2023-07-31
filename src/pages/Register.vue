<template>
    <ModalWindow :is-open="true">
        <RegisterForm />
    </ModalWindow>
</template>

<script setup lang="ts">

import RegisterForm from '@/modules/RegisterForm/RegisterForm.vue';
import ModalWindow from '@/ui/ModalWindow/ModalWindow.vue';

</script>

<style scoped>

</style>