<template>
    <Form :init-config="initConfig" @submit="submitHandler">
        <template #fields="{form, valid}">
            <Input
                placeholder="Type the category name" 
                type="text" 
                id="categories"
                v-model="form.name.value"
                label="Categories"
                :valid="form.name.valid"
                :error="(Object.values(form.name.error).find(e => !!e) as string)"
            />
            <div class="flex justify-between items-end">
                <Input
                    v-model="form.limit.value" 
                    placeholder="Type the limit for category" 
                    type="number" 
                    id="limit"
                    label="Maximum Limit"
                    :disabled="form.unlimited.value"
                    :valid="form.limit.valid"
                    :error="(Object.values(form.limit.error).find(e => !!e) as string)"
                />
                <Checkbox 
                    v-model="form.unlimited.value" 
                    id="unlimited"
                    label="Unlimited"
                    :valid="form.unlimited.valid"
                    :error="(Object.values(form.unlimited.error).find(e => !!e) as string)"
                />
            </div>    
            <Button 
                type="submit"
                :text="buttonText"
                :disabled="!valid"
            />
        </template>
    </Form>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/entities/category/store/category';
import { CategoryId } from '@/entities/category/types';
import { MODE } from '@/shared/constants/formModes';
import { createOverThan } from '@/shared/utils/validators';
import { computed, ref } from 'vue';
import { required } from 'vuelidate/lib/validators';
import Button from '@/ui/Button.vue';
import Input from '@/ui/Input.vue';
import Checkbox from '@/ui/Checkbox.vue';
import Form from '@/ui/Form/Form.vue';


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
            value: selectedCategory.value?.name,
            validators: [required],
        },
        limit: {
            value: selectedCategory.value?.limit,
            validators: [required, createOverThan(0)],
        },
        unlimited: {
            value:  selectedCategory.value?.unlimited,
            disabledOverIds: (value: boolean) => value ? 'limit' : '',
            validators: [],
        }
    };

    const submitHandler = (form: any) => {
        if (props.mode === 'create') {
            categoryStore.add({
                name: form.name.value,
                id: id.value,
                limit: form.limit.value,
                unlimited: form.unlimited.value,
            });
        } else {
            categoryStore.update({
                name: form.name.value,
                id: id.value,
                limit: form.limit.value,
                unlimited: form.unlimited.value,
            }, id.value)
        };
        emits('done');
    };
</script>

<style scoped>

</style>