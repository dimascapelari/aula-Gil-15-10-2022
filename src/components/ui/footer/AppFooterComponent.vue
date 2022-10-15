<template>
  <div class="footer">
    <small>Dimas Sistemas Inteligentes
      <Logo />
    </small>
  </div>
</template>
<script>

import Logo from '@/components/ui/logo/AppLogo.vue';

export default {
  name: 'AppFooterComponent',
  components: {
    Logo,
  },
};
</script>
