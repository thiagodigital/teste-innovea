import { createPinia } from "pinia";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router";

UIkit.use(Icons);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
