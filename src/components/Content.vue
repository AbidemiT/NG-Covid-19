<template>
  <div class="container mt-3">
    <h1 class="text-left">Nigeria Covid-19 Real Time Updates as at {{getPresentDateTime}}</h1>
    <h4>
      Over
      <i class="fa fa-users fa-1x"></i>
      {{ totalTest }} tests conducted
    </h4>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as moment from "moment/moment";
export default {
  name: "Content",
  data() {
    return {
      presentTimeDate: ""
    }
  },
  computed: {
    ...mapGetters({
      totalTest: "totalSamplesTested"
    }),
    getPresentDateTime() {
      return moment().format('MMMM Do YYYY');
    }
  }
};
</script>
