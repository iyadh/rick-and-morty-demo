import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { urlSyncPlugin } from 'pinia-colada/plugin';
import './assets/css/styles.css';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
pinia.use(urlSyncPlugin);

createApp(App).use(pinia).use(router).mount('#app');
