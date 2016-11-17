<template>
  <div id="main">
    <top-header></top-header>
    <div class="container">
      <search-bar></search-bar>
      <cards></cards>
    </div>
  </div>
</template>

<script>
  import TopHeader from './top-header';
  import SearchBar from './search-bar';
  import Cards from './cards';

  export default {
    name: 'app',
    components: {
      'top-header': TopHeader,
      'search-bar': SearchBar,
      cards: Cards,
      //footerview: FooterView,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
