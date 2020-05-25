<template>
  <div class="container mt-3 mb-5">
    <div class="row">
      <div class="col-md-3">
        <div class="card-counter primary">
          <i class="fas fa-viruses fa-2x"></i>
          <div v-if="!confirmedCases" class="count-spinner d-flex align-items-end">
            <div class="spinner-grow text-light ml-auto" role="status" aria-hidden="true"></div>
          </div>
          <span v-else class="count-numbers">{{confirmedCases}}</span>
          <span class="count-name">Confirmed Cases</span>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card-counter info">
          <i class="fas fa-head-side-virus fa-2x"></i>
          <div v-if="!activeCases" class="count-spinner d-flex align-items-end">
            <div class="spinner-grow text-light ml-auto" role="status" aria-hidden="true"></div>
          </div>
          <span v-else class="count-numbers">{{activeCases}}</span>
          <span class="count-name">Active Cases</span>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card-counter success">
          <i class="fas fa-virus-slash fa-2x"></i>
          <div v-if="!discharged" class="count-spinner d-flex align-items-end">
            <div class="spinner-grow text-light ml-auto" role="status" aria-hidden="true"></div>
          </div>
          <span v-else class="count-numbers">{{discharged}}</span>
          <span class="count-name">Discharged</span>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card-counter danger">
          <i class="fas fa-user-times fa-2x"></i>
          <div v-if="!death" class="count-spinner d-flex align-items-end">
            <div class="spinner-grow text-light ml-auto" role="status" aria-hidden="true"></div>
          </div>
          <span v-else class="count-numbers">{{death}}</span>
          <span class="count-name">Deaths</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Card",
  computed: {
    ...mapGetters({
      confirmedCases: "totalConfirmedCases",
      activeCases: "totalActiveCases",
      discharged: "totalDischarged",
      death: "totalDeath"
    })
  }
};
</script>

<style scoped>
.card-counter {
  display: flex;
  box-shadow: 2px 2px 10px #dadada;
  margin: 5px;
  padding: 20px 40px 20px 10px;
  background-color: #fff;
  height: 100px;
  border-radius: 5px;
  transition: 0.3s linear all;
}

.card-counter:hover {
  box-shadow: 4px 4px 20px #dadada;
  transition: 0.3s linear all;
}

.card-counter.primary {
  background-color: #007bff;
  color: #fff;
}

.card-counter.danger {
  background-color: #ef5350;
  color: #fff;
}

.card-counter.success {
  background-color: #66bb6a;
  color: #fff;
}

.card-counter.info {
  background-color: #26c6da;
  color: #fff;
}

.card-counter i {
  font-size: 5em;
  opacity: 0.2;
}

.card-counter .count-numbers {
  position: absolute;
  right: 35px;
  top: 20px;
  font-size: 32px;
  display: block;
  transition: all .2s;
}

.card-counter .count-name {
  position: absolute;
  right: 35px;
  top: 65px;
  font-style: italic;
  text-transform: capitalize;
  opacity: 0.5;
  display: block;
  font-size: 18px;
}
.card-counter .count-spinner {
  position: absolute;
  right: 35px;
  top: 20px;
  font-size: 32px;
  display: block;
}


</style>