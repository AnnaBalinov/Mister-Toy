import { createApp } from 'vue'
import router from './router'
import store from './store'
import './styles/styles.scss'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$filters = {
    currencyUSD(amount) {
        // look implementation inside toy-preview.vue
        return '$' + amount
    },
}

app.use(router)
app.use(store)
app.mount('#app')