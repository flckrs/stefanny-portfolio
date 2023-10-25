import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App).use(router).use(bootstrap).mount('#app')
