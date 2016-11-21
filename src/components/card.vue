<template>
  <div class="col s12 m4">
    <div class="card">
      <div class="card-content">
        <span class="card-title"><router-link :to="{ path: '/people/' + id }">{{ name }}</router-link></span>
        <!--<span class="card-title">{{ myName }}</span>-->
      </div>
      <div class="card-action">
        <!--<a href="#">This is a link</a>
        <a href="#">This is a link</a>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['id', 'name'],
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mdl-card {
  margin: 0 auto;
}
</style>
