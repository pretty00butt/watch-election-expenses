<template>
  <section class="container">
    <h1>{{ person.name }}</h1>
  </section>
</template>

<script>
  import store from '../store'
  export default {
    name: 'person',
    beforeCreate() {
      store.dispatch('getAPerson')
    },
    computed: {
      person() {
        return this.$store.getters.person
      },
    }
  }
</script>

<style scoped>
</style>
