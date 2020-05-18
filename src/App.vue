<template>
  <div id="app">
    <!-- <div class="landing .d-none d-sm-none d-md-block">
      <img style="width: 100%;" src="../public/img/733.jpg" alt="Hello" />
    </div>-->
    <Content />
    <Card />
    <StateTable />
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Card from "./components/Card.vue";
import StateTable from "./components/StateTable.vue";

export default {
  name: "App",
  components: {
    Card,
    Content,
    StateTable
  },
  mounted() {
    this.loadNgCovidData();
  },
  methods: {
    loadNgCovidData() {
      this.$store.dispatch("getNgCovidData");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.landing {
  /* background: url("../src/assets/733.jpg") 40% / 10em gray round fixed
    border-box no-repeat;
  height: 100vh;
  width: 500px; */
}
</style>
