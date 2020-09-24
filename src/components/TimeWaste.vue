<template>
  <div id="TimeWaste">
    <div class="headline">
      <h3>Waste My Time</h3>
    </div>
    <p class="textTop">
      There are 1440 minutes in a day. 24 hours. How do you waste them?
    </p>
    <div class="timeWasteBar">
      <div
        v-for="t in timeSpent"
        :key="t.id"
        class="percentage"
        :style="{
          width: t.time * 0.5 + 'px',
          left: t.timelength * 0.5 + 'px',
          'background-color': t.color,
        }"
      ></div>
    </div>
    <p class="barTotal">
      {{ barTotal }} minutes remaining
      <span class="moveRight">{{ timeDisplay(timeLength) }}</span>
    </p>
    <div class="wastedActivitiesSubmit">
      <form action="post" v-on:submit.prevent="submitActivity">
        <input
          type="text"
          class="inputClass"
          placeholder="Activity..."
          autocomplete="off"
          @focus="showAuto = true"
          v-model="activity"
          @input="filterActivites"
        />
        <select id="value" class="inputClass" name="value" v-model="value">
          <option value disabled selected>Value...</option>
          <option value="worth">Worth</option>
          <option value="waste">Waste</option>
          <option value="chore">Chore</option>
          <option value="sleep">Sleep</option>
        </select>
        <input
          type="number"
          class="inputClass"
          placeholder="Time Spent (Minutes)..."
          v-model="time"
        />
        <input type="submit" class="inputClass" />
      </form>
      <ul v-if="filteredActivities && showAuto">
        <li
          class="autocompleteList"
          v-for="filteredActivity in filteredActivities"
          :key="filteredActivity.id"
          @click="setState(filteredActivity)"
        >
          {{ filteredActivity }}
        </li>
      </ul>
    </div>
    <div class="wastedActivities">{{ errorMessage }}</div>
    <div class="wastedActivities" v-if="!token">{{ notLoggedIn }}</div>
    <div class="wastedActivities" v-if="token">{{ sentData }}</div>

    <div class="wastedActivities">
      <p
        v-for="t in timeSpent.slice().reverse()"
        :key="t.id"
        :style="{ color: t.color }"
      >
        {{ t.activity }} - {{ t.value }} - {{ t.time }}
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { TokenService } from "../storage/service";

export default {
  name: "TimeWaste",
  props: ["sleepProp"],
  data() {
    return {
      activity: "",
      suggestedActivites: ["do dishes", "sweeping", "mopping", "gym"],
      filteredActivities: [],
      showAuto: false,
      value: "",
      time: "",
      color: "",
      timeLength: 0,
      object: {},
      barTotal: 1440,
      testTime: 1440,
      timeSpent: [],
      errorMessage: "",
      notLoggedIn: "",
      sentData: "",
      token: null,
      tokenUsername: null,
      sleep: this.sleepProp,
    };
  },
  mounted() {
    this.sleepAmount();
  },
  methods: {
    setState(activity) {
      this.activity = activity;
      this.showAuto = false;
    },
    filterActivites() {
      this.filteredActivities = this.suggestedActivites.filter((activity) => {
        if (this.activity == "") {
          return "";
        } else {
          return activity.toLowerCase().startsWith(this.activity.toLowerCase());
        }
      });
    },
    sleepAmount() {
      this.object = {
        activity: "slept " + this.sleep + " minutes",
        value: "sleep",
        time: this.sleep,
        timelength: this.timeLength,
        color: "blue",
      };
      this.time = this.sleep;
      this.testTime -= parseInt(this.time);
      this.timeLength += parseInt(this.time);
      console.log("time: " + this.time);
      console.log("testTime: " + this.testTime);
      console.log("timeLength: " + this.timeLength);
      console.log("barTotal: " + this.barTotal);
      this.barTotal -= this.time;
      this.timeSpent.push(this.object);
      console.log(this.timeSpent);
      this.time = "";
    },
    submitActivity() {
      if (this.activity == "") {
        this.errorMessage = "Enter an activity";
      } else if (this.value == "") {
        this.errorMessage = "Enter a value";
      } else if (this.time == "") {
        this.errorMessage = "Enter a time";
      } else if (this.time < 0) {
        this.errorMessage = "You went back in time?";
      } else if (this.time == 0) {
        this.errorMessage = "Why would you enter zero?";
      } else {
        if (this.value == "worth") {
          this.color = "green";
        } else if (this.value == "waste") {
          this.color = "red";
        } else if (this.value == "chore") {
          this.color = "gray";
        } else if (this.value == "sleep") {
          this.color = "blue";
        }
        this.errorMessage = "";
        this.object = {
          activity: this.activity,
          value: this.value,
          time: this.time,
          timelength: this.timeLength,
          color: this.color,
        };
        this.testTime -= parseInt(this.time);
        this.timeLength += parseInt(this.time);
        console.log("time: " + this.time);
        console.log("testTime: " + this.testTime);
        console.log("timeLength: " + this.timeLength);
        console.log("barTotal: " + this.barTotal);
        if (this.testTime < 0) {
          this.errorMessage = "You don't have enough time left!";
          this.testTime = this.barTotal;
          this.timeLength -= this.time;
        } else if (this.testTime == 0) {
          this.errorMessage = "You used up all your time!";
          this.notLoggedIn =
            "This will not be saved because you are not logged in.";
          this.sentData = "This data has been saved in Previous Days.";
          this.barTotal -= this.time;
          this.timeSpent.push(this.object);
          this.postData();
          if (!this.suggestedActivites.includes(this.activity)) {
            this.suggestedActivites.push(this.activity);
          }
        } else {
          this.barTotal -= this.time;
          this.timeSpent.push(this.object);
          if (!this.suggestedActivites.includes(this.activity)) {
            this.suggestedActivites.push(this.activity);
          }
          console.log(this.timeSpent);
        }
      }
    },
    postData() {
      console.log(this.timeSpent);
      this.token = TokenService.getToken();
      console.log(this.token);
      this.tokenUsername = TokenService.getUser();
      console.log(this.tokenUsername);
      if (this.token && this.tokenUsername) {
        axios({
          method: "POST",
          url: "https://waste-my-time-back.herokuapp.com/timewaste/",
          headers: {
            Authorization: "Token " + this.token,
          },
          data: {
            day: this.timeSpent,
            user: this.tokenUsername,
          },
        })
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error.data));
      }
    },
    timeDisplay(value) {
      let num = value;
      let hours = num / 60;
      let rhours = Math.floor(hours);
      let minutes = (hours - rhours) * 60;
      let rminutes = Math.round(minutes);
      if (rhours < 10) {
        rhours = "0" + rhours;
      }
      if (rminutes < 10) {
        rminutes = "0" + rminutes;
      }
      return "Time: " + rhours + ":" + rminutes;
    },
  },
};
</script>
