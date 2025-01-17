import './assets/app.scss';
import 'floating-vue/dist/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import FloatingVue from 'floating-vue';

const app = createApp(App);

app.use(createPinia());
app.use(FloatingVue);

app.mount('#app');
