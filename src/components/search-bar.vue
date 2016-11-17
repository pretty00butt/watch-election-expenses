<template>
  <div class="search-bar">
    <div class="row">
      <form class="col s6 offset-s3 m6 offset-m3">
        <div class="row">
          <div class="col s6">
            <select class="browser-default" v-model="region">
              <option v-for="region in regions" v-bind:value="region.id">{{ region.name }}</option>
            </select>
          </div>
          <div class="col s6">
            <select class="browser-default" v-model="constituency">
              <option v-for="constituency in constituencies" v-bind:value="constituency.id">{{ constituency.name }}</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col s6">
            <select class="browser-default" v-model="party" @change(change)>
              <!--<option value="" disabled selected>정당을 선택하세요</option>-->
              <option v-for="party in parties" v-bind:value="party.id" v-bind:disabled="party.disabled" v-bind:selected="party.selected">{{ party.name }}</option>
            </select>
          </div>
          <div class="col s6">
            <div class="input-field col s6">
              <input placeholder="Placeholder" id="first_name" type="text" class="validate">
              <label for="first_name">First Name</label>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="labels row">
      <div class="col s12 m12">
        <div class="chip" v-if="region">
          {{ region }}
          <i class="close material-icons">close</i>
        </div>
        <div class="chip" v-if="constituency">
          {{ constituency }}
          <i class="close material-icons">close</i>
        </div>
        <div class="chip" v-if="party">
          {{ party }}
          <i class="close material-icons">close</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'searchbar',
    data() {
      return {
        regions: [{ id: '', name: '지역을 선택하세요', disabled: true, selected: true }, { id: '서울', name: '서울' }],
        parties: [{ id: '', name: '정당을 선택하세요', disabled: true, selected: true }, { id: '민주당', name: '민주당' }],
        constituencies: [{ id: '', name: '지역구를 선택하세요', disabled: true, selected: true }, { id: 'seongdong', name: '성동구' }],
        region: '',
        party: '',
        constituency: '',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-bar {
  min-height: 300px;
}

.search-bar > form {
  padding: 100px 0px;
}

.search-bar > form input {
  font-size: 26px;
}

.search-bar > form label {
  font-size: 22px;
}

.search-bar > .labels {
  text-align: center;
}
</style>
