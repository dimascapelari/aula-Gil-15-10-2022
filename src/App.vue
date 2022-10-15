<template>
  <div class="container-fluid">
    <AppNavbar />
    <router-view />
    <AppFooterComponent />
  </div>
</template>
<script>
import AppFooterComponent from '@/components/ui/footer/AppFooterComponent.vue';
import AppNavbar from '@/components/ui/nav-bar/AppNavbar.vue';

export default {
  name: 'MainApp',
  components: {
    AppFooterComponent,
    AppNavbar,
  },
};
</script>
