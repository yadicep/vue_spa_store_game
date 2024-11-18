import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Importa el store de Vuex

import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap'; // Importa JavaScript de Bootstrap

const app = createApp(App);

app.use(router); // Usa Vue Router
app.use(store);  // Usa Vuex

app.mount('#app'); // Monta la app en el DOM