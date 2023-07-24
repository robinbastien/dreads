import { createApp } from 'vue';
import { createPinia, defineStore } from 'pinia';
import App from './components/App.vue';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; // TODO: import only used components
import * as directives from 'vuetify/directives';
import colors from 'vuetify/lib/util/colors.mjs';
import { router } from './utilities/router.js';
import { useUserStore } from './utilities/stores/user.js';

import '@fortawesome/fontawesome-free/css/all.css'

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        dark: true,
        colors: {
          //primary: colors.red.darken1, // #E53935
          //secondary: colors.red.lighten4, // #FFCDD2
        }
      },
    },
  },
  components,
  directives,
});

const pinia = createPinia();
const Application = createApp(App);
Application
.use(vuetify)
.use(router)
.use(pinia)
.mount('#app');

router.beforeEach((to) => {
  // This will work make sure the correct store is used for the current running app
  const user = useUserStore(pinia);

  if (to.meta.requiresAuth && !user.isLoggedIn) return '/login';
});
