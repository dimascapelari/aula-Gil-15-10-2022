<template>
  <div class="container">
    <h1> Página home </h1>
    <AppFilter @buscar="buscarEmitido" />
    <AppDisplay :term="termToChild" />
  </div>
</template>

<script>
import AppDisplay from './display/AppDisplay.vue';
import AppFilter from './filter/AppFilter.vue';

export default {
  name: 'Home',
  data() {
    return {
      termToChild: '',
    };
  },
  components: {
    AppDisplay,
    AppFilter,
  },

  methods: {
    buscarEmitido(termo) {
      this.termToChild = termo;
      console.log(termo);
    },
  },
};
</script>
