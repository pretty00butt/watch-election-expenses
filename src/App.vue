<template>
  <div id="app">
    <navbar></navbar>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    <footerview></footerview>
  </div>
</template>

<script>
  import NavBar from './components/navbar';
  import FooterView from './components/footer';
  import SearchBar from './components/search-bar';

  export default {
    name: 'app',
    components: {
      searchbar: SearchBar,
      navbar: NavBar,
      footerview: FooterView,
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #app .section--center {
    max-width: 1400px;
  }
</style>
