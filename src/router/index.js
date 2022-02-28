import { createRouter, createWebHashHistory } from 'vue-router';
import Characters from '@/components/Characters.vue';
import Character from '@/components/Character.vue';
import NoResults from '@/components/shared/NoResults.vue';

const routes = [
  { path: '/characters', name: 'home', component: Characters },
  { path: '/character/:id', name: 'character', component: Character },
  { path: '/', redirect: '/characters' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NoResults },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
