import { createApp } from "vue";
import App from "./app/App.vue";
import "./app/styles/global.scss";
import ClickOutside from "./app/ClickOutsideDirective.ts";

createApp(App).directive('click-outside', ClickOutside).mount("#app");
