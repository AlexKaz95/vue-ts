<template>
    <div :class="trClass">
        <div>
            {{ item.name }}
        </div>
        <div class="justify-self-start">
            {{ item.limit }}
        </div>
        <div class="actions flex gap-2 justify-self-end">
            <RouterLink :to="{name: 'detail-record', params: {record: item.id}}" >open</RouterLink>
            <div @click="modalOpen=true, selected=item">edit</div>
            <div>delete</div>
        </div>
    </div>
    <Teleport to="body">
        <ModalWindow @click.stop="clickHandler" :is-open="modalOpen">
            <CategoryForm :category="selected" :mode="MODE.EDIT" @click.stop="false"/>
        </ModalWindow>
    </Teleport>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { MODE } from '../constants/formModes';
    import ModalWindow from './ModalWindow.vue';
    import CategoryForm from './CategoryForm.vue';

    const modalOpen = ref(false);
    const selected = ref();

    type CategoryOptions = {
        id: string;
        name: string;
        limit: number;
    }

    defineProps<{
        item: CategoryOptions;
    }>();

    const trClass = computed(() => ([
        'border-b',
        'py-2',
        'px-4',
        'grid',
        'grid-cols-3',
    ]))

    const clickHandler = () => {
        modalOpen.value = false;
    }

</script>

<style scoped>

</style>