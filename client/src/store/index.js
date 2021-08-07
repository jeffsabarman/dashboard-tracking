import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import axios from "../api/axios";
import Swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async registerEvent(context, payload) {
      // console.log(payload.email, "<< payload store");
      try {
        const response = await axios.post("/user/register", {
          email: payload.email,
          password: payload.password
        });
        // console.log(response, "<< response register");
        router.push("/login");
        Swal.fire("Successfully Register", "", "success");
      } catch (err) {
        console.log(err.response.data.message);
        const messages = err.response.data.message.join(", ");
        Swal.fire(messages, "", "error");
      }
    },
    async loginEvent(context, payload) {
      try {
        const response = await axios.post("/user/login", {
          email: payload.email,
          password: payload.password
        });
        // console.log(response.data, "<< hasil");
        localStorage.setItem("access_token", response.data.access_token);
        router.push("/");
        Swal.fire("Successfully Login", "", "success");
      } catch (err) {
        console.log(err.response.data.message);
        const message = err.response.data.message;
        Swal.fire(message, "", "error");
      }
    },
    logoutEvent(context) {
      localStorage.clear();
      router.push("/login");
      Swal.fire("Successfully Logout", "", "success");
    }
  },
  modules: {}
});
