<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Onience</a>
      <a href="#" data-activates="mobile-nav" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
      </ul>
      <ul class="side-nav" id="mobile-nav">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
      </ul>
    </div>
  </nav>>
</template>

<script>
export default {
  name: 'headernav',
  mounted() {
    console.log(this.$el)
    $(".button-collapse").sideNav()
  }
};
</script>

<style scoped>
  nav {
    background-color: #127496;
  }
</style>
