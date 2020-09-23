<template>
  <div id="app">
    <Navbar @getPrevious="getPrevious" @getRegister="getRegister" @getLogin="getLogin" />
    <div class="titlepage" v-if="titlepage == true">
      <TitlePage @getSleep="getSleep" />
    </div>
    <div class="register" v-if="register == true">
      <Register @userCreated="userCreated" />
    </div>
    <div class="login" v-if="login == true">
      <Login @loggedIn="loggedIn" :createdUserProp="createdUser" />
    </div>
    <div class="timewaste" v-if="timewaste == true">
      <TimeWaste :sleepProp="sleep" />
    </div>
    <div class="previousdays" v-if="previousdays == true">
      <PreviousDays />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import PreviousDays from "./components/PreviousDays.vue";
import TimeWaste from "./components/TimeWaste.vue";
import TitlePage from "./components/TitlePage.vue";

export default {
  name: "App",
  data() {
    return {
      timewaste: false,
      register: false,
      login: false,
      previousdays: false,
      titlepage: true,
      createdUser: "",
    };
  },
  components: {
    Navbar,
    Register,
    Login,
    PreviousDays,
    TimeWaste,
    TitlePage,
  },
  methods: {
    getSleep(value) {
      this.sleep = value;
      this.timewaste = !this.timewaste;
      this.titlepage = !this.titlepage;
    },
    getPrevious(value) {
      this.previousdays = value;
      if (this.titlepage == true) {
        this.titlepage = !this.titlepage;
      }
      if (this.timewaste == true) {
        this.timewaste = !this.timewaste;
      }
      if (this.register == true) {
        this.register = !this.register;
      }
      if (this.login == true) {
        this.login = !this.login;
      }
      if (
        this.timewaste == false &&
        this.timewaste == false &&
        this.previousdays == false &&
        this.login == false
      ) {
        this.titlepage = true;
      }
    },
    getRegister(value) {
      this.register = value;
      if (this.titlepage == true) {
        this.titlepage = !this.titlepage;
      }
      if (this.timewaste == true) {
        this.timewaste = !this.timewaste;
      }
      if (this.previousdays == true) {
        this.previousdays = !this.previousdays;
      }
      if (this.login == true) {
        this.login = !this.login;
      }
      if (
        this.timewaste == false &&
        this.timewaste == false &&
        this.register == false &&
        this.login == false
      ) {
        this.titlepage = true;
      }
    },
    getLogin(value) {
      this.login = value;
      if (this.titlepage == true) {
        this.titlepage = !this.titlepage;
      }
      if (this.timewaste == true) {
        this.timewaste = !this.timewaste;
      }
      if (this.previousdays == true) {
        this.previousdays = !this.previousdays;
      }
      if (this.register == true) {
        this.register = !this.register;
      }
      if (
        this.timewaste == false &&
        this.timewaste == false &&
        this.register == false &&
        this.login == false
      ) {
        this.titlepage = true;
      }
    },
    userCreated() {
      this.login = true;
      this.register = false;
      this.createdUser = "User has been created.";
    },
    loggedIn() {
      this.login = false;
      this.titlepage = true;
    },
  },
};
</script>
