
import 'primeicons/primeicons.css';
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import nora from '@primeuix/themes/nora';
import './assets/main.css'


const app = createApp(App);
app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: nora,
        options: {
            prefix: 'p',
            darkModeSelector: 'false',
            cssLayer: true
        }
    }
 });

app.mount('#app');


