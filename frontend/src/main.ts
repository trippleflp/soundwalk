import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './array_extensions';
import Store from './store';

createApp(App).use(router).mount('#app');
