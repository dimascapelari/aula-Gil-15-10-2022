import { createApp } from 'vue';
import './plugins/bootstrap-5-2-2';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
