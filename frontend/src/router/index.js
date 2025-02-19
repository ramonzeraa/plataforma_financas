import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue'; /* dashboard */
import UserPanel from '../views/UserPanel.vue'; /* painel de usuario */
import Achievements from '../views/Achievements.vue'; /* conquistas e evolucao */
import HomeTest from '../views/HomeTest.vue'; /* pagina inicial teste */

const routes = [
  { path: '/', component: HomeTest },
  { path: '/dashboard', component: Dashboard },
  { path: '/user-panel', component: UserPanel },
  { path: '/achievements', component: Achievements },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
