<template>
    <PageTitle text="Log In" class="mb-10 text-center" />
    <Form :init-config="initConfig" @submit="submitHandler">
        <template #fields="{form, valid}">
            <Input
                placeholder="Type the email" 
                type="email" 
                id="email"
                label="Email"
                v-model="form.email.value"
                :valid="form.email.valid"
                :error="(Object.values(form.email.error).find(e => !!e) as string)"
                @blur="form.email.blur"
            />
            <Input
                type="password" 
                id="password"
                label="Password"
                placeholder="Type the password"
                v-model="form.password.value" 
                @blur="form.password.blur"
                :valid="form.password.valid"
                :error="(Object.values(form.password.error).find(e => !!e) as string)"
            />
            <hr class="mb-3">
            <Button 
                type="submit"
                text="Log In"
                class="w-full"
                :disabled="!valid"
            />
        </template>
    </Form>


<div class="text-center">
    Didn't have account? <RouterLink to="/register" tag="a" class="text-lime-600 underline">Go to register</RouterLink>
</div>
</template>

<script setup lang="ts">
    import Form from '@/ui/Form/Form.vue';
    import Input from '@/ui/Input.vue';
    import Button from '@/ui/Button.vue';
    import PageTitle from '@/ui/PageTitle.vue';
    import { emailValidator, createMinLenght, required } from '@/shared/utils/validators';
    import { useRouter } from 'vue-router';

    const initConfig = {
        email: {
            value: '',
            validators: [required, emailValidator]
        },
        password: {
            value: '',
            validators: [required, createMinLenght(8)]
        }
    }

    const router = useRouter();

    const submitHandler = () => {
        router.push('/');
    }
</script>

<style scoped>

</style>