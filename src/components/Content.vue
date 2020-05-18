<template>
  <div class="container mt-3">
    <h1 class="text-left">Nigeria Covid-19 Real Time Updates</h1>
    <h4>
      Over
      <i class="fa fa-users fa-1x"></i>
      {{totalTest}} tests conducted
    </h4>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Content",
  computed: {
    ...mapGetters({
      totalTest: "totalSamplesTested"
    })
  }
};
</script>
