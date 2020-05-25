<template>
  <div id="app">
    <!-- <div class="landing .d-none d-sm-none d-md-block">
      <img style="width: 100%;" src="../public/img/733.jpg" alt="Hello" />
    </div>-->
    <Content />
    <Card />
    <StateTable />
    <Foot/>
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Card from "./components/Card.vue";
import Foot from "./components/FooterContent.vue";
import StateTable from "./components/StateTable.vue";

export default {
  name: "App",
  components: {
    Card,
    Content,
    StateTable,
    Foot
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
</style>
