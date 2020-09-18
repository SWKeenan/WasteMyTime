<template>
  <header>
    <nav>
      <ul class="nav_links">
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
export default {
  name: "Navbar",
  data() {
    return {
      audioOn: false,
      audio: new Audio(require("../assets/activation.mp3")),
      userKey: "",
    };
  },
  methods: {
    beginTW() {
      if (this.audioOn) {
        this.audio.pause();
        this.audioOn = !this.audioOn;
        console.log(this.audioOn);
      } else {
        this.audioOn = !this.audioOn;
        this.audio.play();
        console.log(this.audioOn);
      }
    },
  },
};
</script>