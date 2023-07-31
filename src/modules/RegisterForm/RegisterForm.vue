<template>
    <div class="p-10">
        <PageTitle text="Register" class="mb-10 text-center"/>
    <form action="" class="mb-4">
        <Input
            placeholder="Type the email" 
            type="email" 
            id="email"
            v-model="form.email.value"
            label="Email"
            :valid="form.email.valid"
            :error="form.email.error.required"
        />
        <Input
            v-model="form.password.value" 
            type="password" 
            id="password"
            label="Password"
            :valid="form.password.valid"
            :error="form.password.error.required"
        />
        <Input
            v-model="form.name.value" 
            type="text" 
            placeholder="Type your name"
            id="name"
            label="Name"
            :valid="form.name.valid"
            :error="form.name.error.required"
        />
        <Checkbox
            v-model="form.agreement.value" 
            id="agreement"
            label="I agree with the your rules..."
            :valid="form.agreement.valid"
            :error="form.agreement.error.required"
        />
        <hr class="mb-3">
        <Button 
            type="submit"
            text="Register"
            class="w-full"
            :disabled="!valid"
        />
    </form>


    <div class="">
        Already have account? <RouterLink to="/login" tag="a" class="text-lime-600 underline">Go to login</RouterLink>
    </div>
</div>
</template>

<script setup lang="ts">
import { useForm } from '@/hooks/useForm';
import Input from '@/ui/Input.vue';
import Button from '@/ui/Button.vue';
import PageTitle from '@/ui/PageTitle.vue';
import Checkbox from '@/ui/Checkbox.vue';

    const formInitConfig = {
        email: {
            value: '',
            validators: []
        },
        password: {
            value: '',
            validators: []
        },
        name: {
            value: '',
            validators: []
        },
        agreement: {
            value: false,
            validators: []
        }
    }

    const {valid, form} = useForm(formInitConfig);
</script>

<style scoped>

</style>