<template>
    <Form :init-config="initConfig" @submit="submitHandler">
        <template #fields="{valid, form}">
            <Input 
                id="title"
                type="text"
                label="Title"
                :model-value="form.title.value"
                :error="form.title.error"
            />
            <Selector 
                id="category"
                :options="categories"
                label="Category"
                :model-value="form.category.value"
                :error="form.category.error"
            />
            <Input 
                id="spent"
                type="number"
                label="Spent"
                placeholder="How mush spent"
                :model-value="form.spent.value"
                :error="form.spent.error"
            />
            <Button 
                type="submit"
                text="Create"
                :disabled="!valid"
            />
        </template>
    </Form>
</template>

<script setup lang="ts">
import Input from '@/ui/Input.vue';
import Button from '@/ui/Button.vue';
import Selector from '@/ui/Selector.vue';
import Form from '@/ui/Form/Form.vue';
import { createOverThan, required } from '@/utils/validators';
import { computed } from 'vue';
import { useCategoryStore } from '@/entities/category/store/category';

const initConfig = {
    title: {
        value: '',
        validators: [required]
    },
    category: {
        value: 'Other',
        validators: []
    },
    spent: {
        value: 0,
        validators: [required, createOverThan(0)],
    }
};

const categoryStore = useCategoryStore();

const categories = computed(() => {
    return categoryStore.categoryNames;
})

const submitHandler = (form: any) => {
    console.log(form)
}
</script>

<style scoped>

</style>