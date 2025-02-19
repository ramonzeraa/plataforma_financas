import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue'; /* dashboard */
import UserPanel from '../views/UserPanel.vue'; /* painel de usuario */
import Achievements from '../views/Achievements.vue'; /* conquistas e evolucao */
import HomeTest from '../views/HomeTest.vue'; /* pagina inicial teste */
import PersonalProfile from '../views/Profile.vue';
import Login from '../views/Login.vue'; // Supondo que você tenha uma página de login

const routes = [
  { path: '/', component: HomeTest },
  { path: '/dashboard', component: Dashboard },
  { path: '/user-panel', component: UserPanel },
  { path: '/achievements', component: Achievements },
  { path: '/profile', component: PersonalProfile },
  { path: '/login', component: Login }, // Supondo que você tenha uma página de login
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
