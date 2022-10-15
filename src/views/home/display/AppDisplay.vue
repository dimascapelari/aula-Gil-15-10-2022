<template>
  Dado pesquisado: {{ term }}
</template>

<script>
export default {
  name: 'AppDisplay',
  props: {
    term: {
      type: String,
    },
    name: {
      type: String,
      default: 'Gideão',
    },
  },
};
</script>
