<template>
    <div>
        <div class="flex justify-between items-end mb-4">
        <PageTitle text="History"/>
    </div>
    <hr>
    <div>
        <Table 
            :list="historyList"
        ></Table>
    </div>
    </div>
</template>

<script setup lang="ts">
    import PageTitle from '@/ui/PageTitle.vue';
    

    const historyList = [
        { name: 'Tea', limit: 10, id: '0', },
        { name: 'Tea', limit: 10, id: '1', }
    ];

</script>

<style scoped>

</style>