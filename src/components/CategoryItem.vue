<template>
    <div :class="trClass">
        <div>
            {{ item.name }}
        </div>
        <div class="justify-self-start">
            {{ item.limit }}
        </div>
        <div class="actions flex gap-2 justify-self-end">
            <div >
                edit
            </div>
            <div>
                delete
            </div>
        </div>
    </div>
    <Teleport to="body" v-if="createOpen">
        <ModalWindow @click.stop="clickHandler">
            <CategoryForm :mode="MODE.CREATE" @click.stop="false"/>
        </ModalWindow>
    </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';

    type CategoryOptions = {
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

</script>

<style scoped>

</style>