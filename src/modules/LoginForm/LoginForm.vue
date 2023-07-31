<template>
    <div class="p-10">
        <PageTitle text="Log In" class="mb-10 text-center" />
    <form action="" class="mb-4" @submit.prevent="submitHandler" @focus="trigger">
        <Input
            placeholder="Type the email" 
            type="email" 
            id="email"
            label="Email"
            v-model="form.email.value"
            :valid="form.email.valid"
            :error="form.email.error.required"
            @blur="form.email.blur"
        />
        <Input
            type="password" 
            id="password"
            label="Password"
            v-model="form.password.value" 
            @blur="form.password.blur"
            :valid="form.password.valid"
            :error="form.password.error.required"
        />
        <hr class="mb-3">
        <Button 
            type="submit"
            text="Log In"
            class="w-full"
            :disabled="!valid"
        />
    </form>


    <div class="">
        Didn't have account? <RouterLink to="/register" tag="a" class="text-lime-600 underline">Go to register</RouterLink>
    </div>
</div>
</template>

<script setup lang="ts">
    import { useForm } from '@/hooks/useForm';
    import Input from '@/ui/Input.vue';
    import Button from '@/ui/Button.vue';
    import PageTitle from '@/ui/PageTitle.vue';
    import { useRouter } from 'vue-router';
    import { createMinLenght, emailValidator, required } from '@/utils/validators';

    const formInitConfig = {
        email: {
            value: '',
            validators: [required, emailValidator]
        },
        password: {
            value: '',
            validators: [required, createMinLenght(8)]
        }
    }

    const {form, valid} = useForm(formInitConfig);
    const router = useRouter();

    const submitHandler = () => {
        router.push('/');
    }
    const trigger = () => console.log('trigger')
</script>

<style scoped>

</style>