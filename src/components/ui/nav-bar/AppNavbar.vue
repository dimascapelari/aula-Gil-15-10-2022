<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <AppLogo/>
      <AppButtonToggleNavbar />
      <div class="collapse navbar-collapse" id="novaNavbar">
        <AppMenu />
        <AppSearchBar />
      </div>
    </div>
  </nav>
</template>
<script>
import AppLogo from '@/components/ui/logo/AppLogo.vue';
import AppMenu from '@/components/ui/menu/AppMenu.vue';
import AppSearchBar from '@/components/ui/search-bar/AppSearchBar.vue';
import AppButtonToggleNavbar from './button-toggle-navbar/AppButtonToggleNavbar.vue';

export default {
  name: 'AppNavbar',
  components: {
    AppLogo,
    AppMenu,
    AppSearchBar,
    AppButtonToggleNavbar,
  },
};
</script>
