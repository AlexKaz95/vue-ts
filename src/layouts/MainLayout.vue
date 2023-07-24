<template>
    <header class="header  bg-lime-300">
        <div class="container py-4">
            <nav class="nav flex gap-x-3 justify-between items-center">
                <div class="logo">
                    <RouterLink to="/" active-class="font-bold">Home</RouterLink>
                </div>
                <div class="menu flex gap-x-3">
                    <RouterLink to="/categories" active-class="font-bold">Categories</RouterLink>
                    <RouterLink to="/detail-record" active-class="font-bold">Detail record</RouterLink>
                    <RouterLink to="/planning" active-class="font-bold">Planning</RouterLink>
                    <RouterLink to="/history" active-class="font-bold">History</RouterLink>
                    <RouterLink to="/record" active-class="font-bold">Record</RouterLink>
                </div>
                <div class="flex gap-x-3 self-end items-center">
                    <RouterLink to="/profile" active-class="font-bold">
                        <Icon :icon="userIcon" :size="32"/>
                    </RouterLink>
                    <RouterLink to="/login" active-class="font-bold">Log in</RouterLink>
                    <RouterLink to="/register" active-class="font-bold">Register</RouterLink>
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
    import { RouterLink, RouterView } from 'vue-router';
    import userIcon from '../assets/profile-circle-svgrepo-com.svg';
    import Icon from '../components/Icon.vue';
</script>

<style scoped>

</style>