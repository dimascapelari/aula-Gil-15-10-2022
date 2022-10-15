<template>
  <li class="nav-item">
    <router-link
      class="nav-link active"
      aria-current="page"
      :to="itemMenuProp.path"
    >
      {{ itemMenuProp.label }}
    </router-link>
  </li>
</template>
<script>
export default {
  name: 'AppMenuItem',
  props: {
    itemMenuProp: Object,
  },
};
</script>
<style>
@import './AppMenuItem.css';
</style>
