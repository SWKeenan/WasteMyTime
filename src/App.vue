<template>
  <div id="app">
    <div class="titlepage" v-if="titlepage == true">
      <TitlePage @getSleep="getSleep" />
    </div>
    <div class="timewaste" v-if="timewaste == true">
      <TimeWaste :sleepProp="sleep" />
    </div>
  </div>
</template>

<script>
import TimeWaste from './components/TimeWaste.vue';
import TitlePage from './components/TitlePage.vue';

export default {
  name: 'App',
  data() {
    return {
      timewaste: false,
      titlepage: true,
    };
  },
  components: {
    TimeWaste,
    TitlePage,
  },
  methods: {
    getSleep(value) {
      this.sleep = value;
      this.timewaste = !this.timewaste;
      this.titlepage = !this.titlepage;
    },
  },
};
</script>
