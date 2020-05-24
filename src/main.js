import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "moment";
import Axios from "axios";
import store from "./store";

Vue.prototype.$http = Axios;
Vue.use(Moment);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
