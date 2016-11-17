<template>
  <section class="row">
    <card v-for="user in users" v-bind:my-name="user.name"></card>
  </section>
</template>

<script>
  import Card from './card';

  export default {
    name: 'cards',
    components: {
      card: Card,
    },
    data() {
      return {
        me: '',
        users: [{
          name: 'me',
        }, {
          name: 'me2',
        }],
      };
    },
  };
</script>

<style scoped>
</style>
