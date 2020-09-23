<template>
  <div id="Login">
    <div class="headline">
      <h3>Waste My Time</h3>
    </div>
    <h4 class="subtitle">Login</h4>
    <div class="sleepQuestion">
      <form action="post" v-on:submit.prevent="submitUser">
        <input type="text" class="registerInput" placeholder="Enter username..." v-model="username" />
        <input
          type="password"
          class="registerInput"
          placeholder="Enter password..."
          v-model="password"
        />
        <input type="submit" class="inputClass" />
      </form>
      <p class="errorMessage">{{ errorMessage }}</p>
      <p class="errorMessage">{{ createdUser }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  props: ["createdUserProp"],
  data() {
    return {
      username: "",
      tokenUsername: "",
      password: "",
      token: localStorage.getItem("user-token") || null,
      errorMessage: "",
      createdUser: this.createdUserProp || "",
    };
  },
  methods: {
    submitUser() {
      if (this.username == "") {
        this.errorMessage = "Enter a username.";
      } else if (this.password == "") {
        this.errorMessage = "Enter a password.";
      } else {
        axios({
          method: "POST",
          url: "https://waste-my-time-back.herokuapp.com/rest-auth/login/",
          data: {
            username: this.username,
            password: this.password,
          },
        })
          .then((response) => {
            this.token = response.data.key;
            localStorage.setItem("user-token", response.data.key);
            axios({
              method: "GET",
              url: "https://waste-my-time-back.herokuapp.com/rest-auth/user/",
              headers: {
                Authorization: "Token " + this.token,
              },
            })
              .then((response) => {
                this.tokenUsername = response.data.pk;
                localStorage.setItem("user-name", response.data.pk);
                this.$emit("loggedIn");
                location.reload();
              })
              .catch((error) => console.log(error.response.data));
          })
          .catch((error) => {
            this.errorMessage = error.response.data;
            localStorage.removeItem("user-token");
          });
      }
    },
  },
};
</script>
