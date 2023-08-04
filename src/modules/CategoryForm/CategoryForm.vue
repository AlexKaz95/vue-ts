<template>
<div class="p-10">
    <Form :init-config="initConfig" @submit="submitHandler">
        <template #fields="{form, valid}">
            <Input
                placeholder="Type the category name" 
                type="text" 
                id="categories"
                v-model="form.name.value"
                label="Categories"
                :valid="form.name.valid"
                :error="form.name.error.required"
            />
            <Input
                v-model="form.limit.value" 
                placeholder="Type the limit for category" 
                type="number" 
                id="limit"
                label="Minimum Limit"
                :valid="form.limit.valid"
                :error="form.limit.error.required"
            />
            <Button 
                type="submit"
                :text="buttonText"
                :disabled="!valid"
            />
        </template>
    </Form>
</div>
</template>

<script setup lang="ts">
    import Form from '@/ui/Form/Form.vue';
    import Input from '@/ui/Input.vue';
    import Button from '@/ui/Button.vue';
    import { MODE } from '@/constants/formModes';
    import { useCategoryStore } from '@/entities/category/store/category';
    import { CategoryId } from '@/entities/category/types';
    import { createOverThan, required } from '@/utils/validators';
    import { computed, ref } from 'vue';

    const props = defineProps<{
        mode: MODE;
        selectedCategoryId?: CategoryId;
    }>();

    const emits = defineEmits<{
        done: []
    }>();
    
    const buttonText = computed(() => props.mode === MODE.CREATE ? 'Create' : 'Edit')
    const categoryStore = useCategoryStore();
    const id = ref<CategoryId>(props.selectedCategoryId ?? categoryStore.nextId);
    const selectedCategory = computed(() => categoryStore.getCategoryById(id.value));

    const initConfig = {
        name: {
            value: selectedCategory.value?.name ?? '',
            validators: [required],
        },
        limit: {
            value: selectedCategory.value?.limit ?? 0,
            validators: [required, createOverThan(0)],
        },
    };

    const submitHandler = (form: any) => {
        if (props.mode === 'create') {
            categoryStore.add({
                name: form.name.value,
                id: id.value,
                limit: form.limit.value ?? 0,
            });
        } else {
            categoryStore.update({
                name: form.name.value,
                id: id.value,
                limit: form.limit.value,
            }, id.value)
        };
        emits('done');
    };
</script>

<style scoped>

</style>