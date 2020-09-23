<template>
  <div id="Register">
    <div class="headline">
      <h3>Waste My Time</h3>
    </div>
    <h4 class="subtitle">Register</h4>
    <div class="sleepQuestion">
      <form action="post" v-on:submit.prevent="submitUser">
        <input type="text" class="registerInput" placeholder="Enter username..." v-model="username" />
        <input type="email" class="registerInput" placeholder="Enter email..." v-model="email" />
        <input
          type="password"
          class="registerInput"
          placeholder="Enter password..."
          v-model="password1"
        />
        <input
          type="password"
          class="registerInput"
          placeholder="Enter password again..."
          v-model="password2"
        />
        <input type="submit" class="inputClass" />
      </form>
      <p class="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password1: "",
      password2: "",
      errorMessage: "",
      register: false,
    };
  },
  methods: {
    submitUser() {
      if (this.username == "") {
        this.errorMessage = "Enter a username.";
      } else if (this.email == "") {
        this.errorMessage = "Enter an email.";
      } else if (this.password1 == "") {
        this.errorMessage = "Enter a password.";
      } else if (this.password2 == "") {
        this.errorMessage = "Enter password confirmation.";
      } else if (/\S+@\S+\.\S+/.test(this.email) == false) {
        this.errorMessage = "Enter a valid email.";
      } else if (this.password1 != this.password2) {
        this.errorMessage = "The passwords do not match.";
      } else {
        axios({
          method: "POST",
          url: "http://localhost:8000/rest-auth/registration/",
          auth: {
            username: "shane",
            password: "bluehouse",
          },
          data: {
            username: this.username,
            email: this.email,
            password1: this.password1,
            password2: this.password2,
          },
        })
          .then((response) => {
            console.log(response);
            this.$emit("userCreated");
          })
          .catch((error) => (this.errorMessage = error.response.data));
      }
    },
  },
};
</script>
