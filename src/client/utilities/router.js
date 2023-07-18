import * as VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Feed from '../components/Feed.vue';
import Auth from '../utilities/auth.js';

const routes = [
  {
    path: '/',
    component: Feed,
    beforeEnter: (to, from, next) => {
      if (Auth.isLoggedIn()) {
        next()
      } else {
        next('/login')
      }
    },
  },
  { path: '/login', component: Login },
]

export const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})
