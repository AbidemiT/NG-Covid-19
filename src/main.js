import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import store from "./store";

Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
