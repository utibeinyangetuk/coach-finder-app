import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import card from './components/ui/card.vue'
import button from './components/ui/button.vue'
import badge from './components/ui/badge.vue'

createApp(App)
	.use(store)
	.use(router)
	.component('base-card', card)
	.component('base-button', button)
	.component('base-badge', badge)
	.mount('#app')
