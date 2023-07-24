<template>
<div class="p-10">
    <form action="">
        <Input
            placeholder="Type the category name" 
            type="text" 
            id="categories"
            v-model="categories"
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
    import { ref } from 'vue';
    import Input from './Input.vue';
    import Button from './Button.vue';
    import { MODE } from '../constants/formModes'

    const props = defineProps<{
        mode: MODE;
        category?: any;
    }>();

    const categories = ref(props.category?.name ?? '');
    const limit = ref(props.category?.limit ?? null) ;

    const clickHandler = () =>  {
        if (props.mode === 'create') console.log('created')
        else console.log('edited');
    }
    
</script>

<style scoped>

</style>