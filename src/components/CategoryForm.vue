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
    import { ref } from 'vue';
    import Input from './Input.vue';
    import Button from './Button.vue';
    import { MODE } from '../constants/formModes'
    import { useStore } from 'vuex';

    const props = defineProps<{
        mode: MODE;
        category?: any;
    }>();

    const store = useStore()
    const name = ref(props.category?.name ?? '');
    const limit = ref(props.category?.limit ?? null) ;
    const id = ref(props.category?.id);

    const clickHandler = () =>  {
        if (props.mode === 'create') {
            store.commit('ADD_CATEGORY', {cat: {
                name,
                limit
            }})
        } else {
            store.commit('UPDATE_CATEGORY', {
                id,
                name,
                limit
            })
        };
    };    
</script>

<style scoped>

</style>