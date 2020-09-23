<template>
  <div id="TitlePage">
    <div class="headline">
      <h3>Waste My Time</h3>
    </div>
    <p class="textTop">There are 1440 minutes in a day. 24 hours. How do you waste them?</p>
    <br />
    <p v-if="emptySwitch" class="errorMsg">{{ emptyMessage }}</p>
    <div class="textTop" v-for="t in filteredArray" :key="t.id">
      <div v-if="t.user==tokenUsername">
        <p>User: {{ t.username }}</p>
        <p>Date: {{ t.date }}</p>
        <div v-for="day in t.day" :key="day.id">
          <p>
            Time: {{ day.time }} minutes -
            Color: {{ day.color.charAt(0).toUpperCase() + day.color.slice(1)}} -
            Value: {{ day.value.charAt(0).toUpperCase() + day.value.slice(1) }} -
            Activity: {{ day.activity.charAt(0).toUpperCase() + day.activity.slice(1) }}
          </p>
        </div>
        <br />
        <div class="timeWasteBar">
          <div
            v-for="day in t.day"
            :key="day.id"
            class="percentage"
            :style="{
          width: day.time * 0.5 + 'px',
          left: day.timelength * 0.5 + 'px',
          'background-color': day.color,
        }"
          ></div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { TokenService } from "../storage/service";
export default {
  name: "TitlePage",
  data() {
    return {
      errorMessage: "",
      sleeptemp: "",
      sleep: "",
      timewaste: [],
      filteredArray: [],
      emptyMessage: "You don't have any previous days saved yet.",
      emptySwitch: false,
      tokenUsername: TokenService.getUser() || null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    beginTW() {
      if (this.sleeptemp == "") {
        this.errorMessage = "Enter a time you slept";
      } else if (this.sleeptemp > 24) {
        this.errorMessage = "You slept more than 24 hours? Try again.";
      } else if (this.sleeptemp < 0) {
        this.errorMessage = "You slept a negative number of hours? Oh stop it.";
      } else {
        this.errorMessage = "";
        this.sleep = this.sleeptemp * 60;
        this.$emit("getSleep", this.sleep);
      }
    },
    getData() {
      axios({
        method: "GET",
        url: "https://waste-my-time-back.herokuapp.com/timewaste/",
        auth: {
          username: "shane",
          password: "bluehouse",
        },
      })
        .then((response) => {
          this.timewaste.push(response.data);
          this.timewaste[0].filter((el) => {
            if (el.user == this.tokenUsername) this.filteredArray.push(el);
          });
          if (this.filteredArray.length == 0) {
            this.emptySwitch = true;
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
