<template>
  <header>
    <nav>
      <ul class="nav_links">
        <span v-if="token">
          <li v-if="previousdays" @click="showPrevious">
            <a href="#">Go Back</a>
          </li>
          <li v-else @click="showPrevious">
            <a href="#">Previous Days</a>
          </li>
        </span>
        <li v-if="!token">
          <a href="#" @click="getRegister">Register</a>
        </li>
        <li v-if="!token">
          <a href="#" @click="getLogin">Login</a>
        </li>
        <li v-else>
          <a href="#" @click="getLogout">Logout</a>
        </li>
        <li v-if="audioOn" @click="beginTW">
          <a href="#">Sound On</a>
        </li>
        <li v-else @click="beginTW">
          <a href="#">Sound Off</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import axios from "axios";
import { TokenService } from "../storage/service";
export default {
  name: "Navbar",
  data() {
    return {
      audioOn: false,
      audio: new Audio(require("../assets/activation.mp3")),
      userKey: "",
      previousdays: false,
      register: false,
      token: TokenService.getToken() || null,
    };
  },
  methods: {
    beginTW() {
      if (this.audioOn) {
        this.audio.pause();
        this.audioOn = !this.audioOn;
      } else {
        this.audioOn = !this.audioOn;
        this.audio.play();
      }
    },
    showPrevious() {
      if (this.showPrevious) {
        this.previousdays = !this.previousdays;
        this.$emit("getPrevious", this.previousdays);
      } else {
        this.previousdays = !this.previousdays;
        this.$emit("getPrevious", this.previousdays);
      }
    },
    getRegister() {
      if (this.getRegister) {
        this.register = !this.register;
        this.$emit("getRegister", this.register);
      } else {
        this.register = !this.register;
        this.$emit("getRegister", this.register);
      }
    },
    getLogin() {
      if (this.getLogin) {
        this.login = !this.login;
        this.$emit("getLogin", this.login);
      } else {
        this.login = !this.login;
        this.$emit("getLogin", this.login);
      }
    },
    getLogout() {
      axios({
        method: "POST",
        url: "http://localhost:8000/rest-auth/logout/",
      })
        .then((response) => {
          console.log(response.data);
          localStorage.removeItem("user-token");
          localStorage.removeItem("user-name");
          location.reload();
        })
        .catch((error) => {
          console.log(error.data);
        });
    },
  },
};
</script>