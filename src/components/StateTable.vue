<template>
  <div class="container">
    <div class="row mt-3 mb-3 middle">
      <div class="col-sm-12 input-container">
        <input type="search" v-model="searchState" placeholder="Search by State Name" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 table-responsive">
        <table class="table table-sm table-striped">
          <thead>
            <tr class="table-success">
              <th scope="col">s/n</th>
              <th scope="col">State</th>
              <th scope="col">Confirmed Cases</th>
              <th scope="col">Cases On Admission</th>
              <th scope="col">Discharged</th>
              <th scope="col">Death</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(state, i) in stateResult" :key="i">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ state.state }}</td>
              <td>{{ state.confirmedCases }}</td>
              <td>{{ state.casesOnAdmission }}</td>
              <td>{{ state.discharged }}</td>
              <td>{{ state.death }}</td>
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
  data() {
    return {
      searchState: ""
    };
  },
  computed: {
    ...mapGetters({
      states: "totalState"
    }),
    stateResult() {
      if (this.searchState) {
        return this.states.filter(state => {
          return this.searchState
            .toLowerCase()
            .split(" ")
            .every(v => state.state.toLowerCase().includes(v));
        });
      } else {
        return this.states;
      }
    }
  }
};
</script>


<style scoped>
.middle {
  width: 70%;
  margin: 0 auto;
}
.input-container input {
  height: 50px;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 5px;
  width: 100%;
  padding-left: 10px;
}
.input-container input:focus,
.input-container input:hover {
  border: 1px solid #66bb6a;
}
</style>