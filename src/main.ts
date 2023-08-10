import App from './App.vue'
import { createApp } from 'vue'
import { router } from './app/router';
import { createPinia } from 'pinia';
import './style.css'

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount('#app');
