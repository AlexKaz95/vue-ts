<template>
    <PageTitle text="Register" class="mb-10 text-center"/>
    <Form :init-config="initConfig" @submit="submitHandler">
        <template #fields="{form, valid}">
            <Input
                placeholder="Type the email" 
                type="email" 
                id="email"
                v-model="form.email.value"
                label="Email"
                :valid="form.email.valid"
                :error="(Object.values(form.email.error).find(e => !!e) as string)"
            />
            <Input
                v-model="form.password.value" 
                type="password" 
                id="password"
                label="Password"
                :valid="form.password.valid"
                :error="(Object.values(form.password.error).find(e => !!e) as string)"
            />
            <Input
                v-model="form.name.value" 
                type="text" 
                placeholder="Type your name"
                id="name"
                label="Name"
                :valid="form.name.valid"
                :error="(Object.values(form.name.error).find(e => !!e) as string)"
            />
            <Checkbox
                v-model="form.agreement.value" 
                id="agreement"
                label="I agree with the your rules..."
                :valid="form.agreement.valid"
                :error="(Object.values(form.agreement.error).find(e => !!e) as string)"
            />
            <hr class="mb-3">
            <Button 
                type="submit"
                text="Register"
                class="w-full"
                :disabled="!valid"
            />
            </template>
        </Form>
    <div class="text-center">
        Already have account? <RouterLink to="/login" tag="a" class="text-lime-600 underline">Go to login</RouterLink>
    </div>
</template>

<script setup lang="ts">
    import Input from '@/ui/Input.vue';
    import Form from '@/ui/Form/Form.vue';
    import Button from '@/ui/Button.vue';
    import PageTitle from '@/ui/PageTitle.vue';
    import Checkbox from '@/ui/Checkbox.vue';
    import { createMinLenght, emailValidator, required } from '@/shared/utils/validators';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const initConfig = {
        email: {
            value: '',
            validators: [required, emailValidator]
        },
        password: {
            value: '',
            validators: [required, createMinLenght(8)]
        },
        name: {
            value: '',
            validators: [required]
        },
        agreement: {
            value: false,
            validators: [required]
        }
    }

    const submitHandler = () => {
        router.push('/')
    }

</script>

<style scoped>

</style>