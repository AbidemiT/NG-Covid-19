<template>
  <div class="container">
    <div class="row">
      <div class="col-12 table-responsive">
        <table class="table table-sm table-striped">
          <thead>
            <tr class="table-success">
              <th scope="col">s/n</th>
              <th scope="col">State</th>
              <th scope="col">confirmedCases</th>
              <th scope="col">casesOnAdmission</th>
              <th scope="col">discharged</th>
              <th scope="col">death</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(state, i) in states" :key="i">
              <th scope="row">{{i + 1}}</th>
              <td>{{state.state}}</td>
              <td>{{state.confirmedCases}}</td>
              <td>{{state.casesOnAdmission}}</td>
              <td>{{state.discharged}}</td>
              <td>{{state.death}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "StateTable",
  computed: {
    ...mapGetters({
      states: "totalState"
    })
  }
};
</script>
