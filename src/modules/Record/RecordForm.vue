<template>
    <PageTitle :text="titleText" class="mb-10 text-center"/>
    <Form :init-config="initConfig" @submit="submitHandler">
        <template #fields="{valid, form}">
            <Input 
                id="title"
                type="text"
                label="Title"
                placeholder="What was spent on?"
                v-model="form.title.value"
                :error="(Object.values(form.title.error).find(e => !!e) as string)"
            />
            <Selector 
                id="category"
                :options="categories"
                label="Category"
                v-model="form.category.value"
                :error="(Object.values(form.category.error).find(e => !!e) as string)"
            />
            <Input 
                id="spent"
                type="number"
                label="Spent"
                placeholder="How mush was spent?"
                v-model="form.spent.value"
                :error="(Object.values(form.spent.error).find(e => !!e) as string)"
            />
            <Button 
                type="submit"
                :text="buttonText"
                :disabled="!valid"
            />
        </template>
    </Form>
</template>

<script setup lang="ts">
    import Input from '@/ui/Input.vue';
    import Button from '@/ui/Button.vue';
    import Form from '@/ui/Form/Form.vue';
    import PageTitle from '@/ui/PageTitle.vue';
    import Selector from '@/ui/Selector.vue';
    import { useCategoryStore } from '@/entities/category/store/category';
    import { useRecordStore } from '@/entities/record/store/records';
    import { RecordId } from '@/entities/record/types';
    import { MODE } from '@/shared/constants/formModes';
    import { createOverThan, required } from '@/shared/utils/validators';
    import { ref, computed } from 'vue';

const props = defineProps<{
    mode: MODE;
    selectedRecordId?: RecordId;
}>();

const emits = defineEmits<{
    'done': []
}>();

const recordStore = useRecordStore();
const categoryStore = useCategoryStore();
const id = ref<RecordId>(props.selectedRecordId ?? recordStore.nextId);

const selectedRecord = computed(() => recordStore.getRecordById(id.value));
const categories = computed(() => categoryStore.entries);
const buttonText = computed(() => props.mode === MODE.CREATE ? 'Create' : 'Edit')
const titleText = computed(() => props.mode === MODE.CREATE ? 'Create new record' : 'Edit record');

const initConfig = {
    title: {
        value: selectedRecord.value?.title,
        validators: [required]
    },
    category: {
        value: selectedRecord.value?.categoryId || '0',
        validators: []
    },
    spent: {
        value: selectedRecord.value?.spent,
        validators: [required, createOverThan(0)],
    }
};

const submitHandler = (form: any) => {
    if (props.mode === 'create') {
        recordStore.add({
            id: id.value,
            date: Date.now(),
            title: form.title.value,
            spent: form.spent.value,
            categoryId: form.category.value
        });
    } else {
        recordStore.update({
            id: id.value,
            date: selectedRecord.value.date,
            title: form.title.value,
            spent: form.spent.value,
            categoryId: form.category.value
        }, 
        id.value);
    }
    emits('done');
}
</script>

<style scoped>

</style>