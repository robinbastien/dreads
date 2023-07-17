import { createApp } from 'vue';
import App from './components/App.vue';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; // TODO: import only used components
import * as directives from 'vuetify/directives';
import colors from 'vuetify/lib/util/colors.mjs';

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

createApp(App).use(vuetify).mount('#app');
