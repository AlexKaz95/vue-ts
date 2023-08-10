<template>
    <header class="header  bg-lime-300">
        <div class="container py-4">
            <nav class="nav flex gap-x-3 justify-between items-center">
                <div class="logo flex items-center gap-x-2">
                    <RouterLink to="/" exact-active-class="stroke-2">
                        <Icon :icon="homeIcon" :size="32" class=""/>
                    </RouterLink>
                    <span class="date">
                        {{ dateFormatter(date, DATE_FORMAT.DATE_TIME) }}
                    </span>
                </div>
                <div class="menu flex gap-x-3">
                    <RouterLink to="/categories" active-class="font-bold">Categories</RouterLink>
                    <RouterLink to="/planning" active-class="font-bold">Planning</RouterLink>
                    <RouterLink to="/history" active-class="font-bold">History</RouterLink>
                    <RouterLink to="/record" active-class="font-bold">Record</RouterLink>
                </div>
                <div class="flex gap-x-3 self-end items-center">
                    <DropDown>
                        <template #button>
                            <div class="flex items-center gap-x-2">
                                <span>Alexandra</span>
                                <Icon :icon="userIcon" :size="32"/>
                            </div>
                        </template>
                        <template #drop>
                            <RouterLink to="/profile" class="block py-3 px-8 hover:bg-lime-400">Profile</RouterLink>
                            <a href="#" @click.prevent="logout" class="block py-3 px-8 hover:bg-lime-400">Log Out</a>
                        </template>
                    </DropDown>
                </div>
            </nav>
        </div>
    </header>
    <aside class="aside"></aside>
    <main class="main">
        <div class="container mt-6">
            <RouterView />
        </div>
    </main>
    <footer></footer>
</template>

<script setup lang="ts">
    import { RouterLink, RouterView, useRouter } from 'vue-router';
    import userIcon from '../assets/profile-circle-svgrepo-com.svg';
    import Icon from '@/ui/Icon.vue';
    import homeIcon from '@/assets/home-svgrepo-com.svg';
    import DropDown from '@/ui/DropDown.vue';
    import { onMounted, onUnmounted, ref } from 'vue';
    import {dateFormatter, DATE_FORMAT} from '@/shared/utils/dateFormatter';

    const router = useRouter();
    onMounted(() => {
        interval = setInterval(() => {
            date.value = new Date();
        }, 1000)
    })
    const date = ref(new Date());
    let interval: NodeJS.Timer | null = null;

    const logout = () => {
        router.push('/login?message=logout')
    }
    
    onUnmounted(() => {
        interval && clearTimeout(interval);
    })
</script>

<style scoped>

</style>