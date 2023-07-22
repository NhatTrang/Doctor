import { createApp } from "vue";
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/antd.css';
const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(pinia);
app.mount('#app');
