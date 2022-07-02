import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import card from "./components/ui/card.vue";

createApp(App)
	.use(store)
	.use(router)
	.component("base-card", card)
	.mount("#app");
