import './bootstrap';

import { createApp } from 'vue'
import router from './router/index'
import VueSweetalert2 from 'vue-sweetalert2';

const app = createApp({})
app.use(router)
app.use(VueSweetalert2)
app.mount('#app')