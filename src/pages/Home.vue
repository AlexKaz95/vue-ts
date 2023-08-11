<template>
    <div class="flex justify-between items-end mb-4">
        <PageTitle text="Hello, Alexandra!"/>
        <Button type="button" @click="clickHandler" text="Refresh" />
    </div>
    <hr>
    <div class="grid grid-cols-3 gap-x-10 mt-5">
        <div class="bg-sky-300 py-4 px-8 pb-8">
            <h2 class="text-lg">Cash</h2>
            <div class="mt-6">
                <p class="border-b text-xl divide-y-2 border-black py-2 text-right">{{ cash }} {{ currency }}</p>
                <p class="border-b text-xl divide-y-2 border-black py-2 text-right">{{ cash }} {{ currency }}</p>
            </div>
        </div>
        <div class="col-start-2 col-end-4 bg-lime-300 py-4 px-8 pb-8">
            <h2 class="text-lg">Exchange rate</h2>
            <table class="min-w-full text-left text-sm font-light mt-6">
            <thead class="border-b dark:border-neutral-500">
            <tr>
              <th scope="col" class="font-medium text-xl px-4 py-2">Currency</th>
              <th scope="col" class="font-medium text-xl px-4 py-2">Rate</th>
              <th scope="col" class="font-medium text-xl px-4 py-2">Date</th>
            </tr>
            </thead>

            <tbody>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap text-xl px-4 py-2 font-regular">RUB</td>
              <td class="whitespace-nowrap text-xl px-4 py-2 font-regular">12121</td>
              <td class="whitespace-nowrap text-xl px-4 py-2 font-regular">12.12.12</td>
            </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/ui/Button.vue';
import PageTitle from '@/ui/PageTitle.vue';
import { ref } from 'vue';

const cash = ref(12.05);
const currency = ref('RUB')

const  clickHandler = () => {
}
</script>

<style scoped>

</style>