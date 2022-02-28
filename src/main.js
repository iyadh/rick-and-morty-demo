import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/css/styles.css';
import App from './App.vue';
import router from './router';

createApp(App).use(createPinia()).use(router).mount('#app');
