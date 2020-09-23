<template>
  <div id="TitlePage">
    <div class="headline">
      <h3>Waste My Time</h3>
    </div>
    <p class="textTop">There are 1440 minutes in a day. 24 hours. How do you waste them?</p>
    <div class="sleepQuestion">
      <form action="post" v-on:submit.prevent="beginTW">
        <input
          type="number"
          class="sleepClass"
          placeholder="How many hours did you sleep last night?"
          v-model="sleeptemp"
        />
        <input type="submit" class="inputClass" />
      </form>
    </div>
    <div class="wastedActivities">{{ errorMessage }}</div>
  </div>
</template>
<script>
export default {
  name: "TitlePage",
  data() {
    return {
      errorMessage: "",
      sleeptemp: "",
      sleep: "",
      timewaste: [],
    };
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
  },
};
</script>
