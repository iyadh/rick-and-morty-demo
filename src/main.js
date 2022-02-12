import { createApp } from 'vue';
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from 'vue-router';
import './assets/css/styles.css';
import App from './App.vue';
import Characters from "./components/Characters.vue";
import Character from "./components/Character.vue";

const routes = [
  { path: '/characters', name: 'home', component: Characters },
  { path: '/character/:id', name: 'character', component: Character },
  { path: '/', redirect: '/characters' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app');
