<template>
  <div class="input-group mb-3">
    <input
      v-model="termoBuscado"
      type="text"
      class="form-control"
      placeholder="Digite um nome"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    >
    <button
      @click="buscar"
      class="btn btn-outline-secondary"
      type="button"
      id="button-addon2"
    >
      Pesquisar
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppFilter',
  data() {
    return {
      termoBuscado: '',
    };
  },

  methods: {
    buscar() {
      this.$emit('buscar', this.termoBuscado);
    },
  },
};
</script>
