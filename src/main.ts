import '@/assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import PrimeVue from 'primevue/config';

import Aura from '@primevue/themes/aura';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
    },
  },
});
app.use(pinia);
pinia.use(piniaPluginPersistedstate);
app.use(router);

app.mount('#app');
