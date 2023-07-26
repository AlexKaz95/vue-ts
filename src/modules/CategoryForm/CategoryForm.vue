<template>
<div class="p-10">
    <form action="">
        <Input
            placeholder="Type the category name" 
            type="text" 
            id="categories"
            v-model="name"
            label="Categories"
            error="Required"
        />
        <Input
            v-model="limit" 
            placeholder="Type the limit for category" 
            type="number" 
            id="limit"
            label="Minimum Limit"
            error="Required"
        />
        <Button 
            type="submit"
            :text="mode === MODE.CREATE ? 'Create' : 'Edit'"
            @click="clickHandler"
        />
    </form>
</div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import Input from '@/ui/Input.vue';
    import Button from '@/ui/Button.vue';
    import { MODE } from '@/constants/formModes'
    import { CategoryId } from '@/entities';
    import { useCategoryStore } from '@/store/category';

    const props = defineProps<{
        mode: MODE;
        selectedCategoryId?: CategoryId;
    }>();

    const emits = defineEmits<{
        done: []
    }>()
    
    const categoryStore = useCategoryStore();
    const id = ref<CategoryId>(props.selectedCategoryId ?? categoryStore.nextId);
    const selectedCategory = computed(() => categoryStore.getCategoryById(id.value));
    const name = ref<string>(selectedCategory.value?.name ?? '');
    const limit = ref<number>(selectedCategory.value?.limit ?? 0);

    const clickHandler = () => {
        if (props.mode === 'create') {
            categoryStore.add({
                name: name.value,
                id: id.value,
                limit: limit.value ?? 0,
            });
        } else {
            categoryStore.update({
                name: name.value,
                id: id.value,
                limit: limit.value,
            }, id.value)
        };
        emits('done');
    }
</script>

<style scoped>

</style>