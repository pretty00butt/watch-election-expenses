<template>
  <section class="row">
    <card v-for="person in people" v-bind:name="person.name" v-bind:id="person.id"></card>
  </section>
</template>

<script>
  import Card from './card'
  import { mapActions } from 'vuex'

  export default {
    name: 'cards',
    components: {
      card: Card,
    },
    methods: {
      ...mapActions([
        'getPeople'
      ])
    },
    computed: {
      people() {
        return this.$store.getters.people
      },
    },
  };
</script>

<style scoped>
</style>
