<template>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <template v-for="(item, index) in menuItens" :key="index">
      <AppMenuItem v-if="!item.hasChildren" :itemMenuProp="item" />
      <li v-if="item.hasChildren" :key="index" class="nav-item dropdown">
        <router-link
          id="navbarDropdown"
          class="nav-link dropdown-toggle"
          aria-current="page"
          data-bs-toggle="dropdown" aria-expanded="false"
          :to="item.path"
        >
          {{ item.label }}
        </router-link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li v-for="(child, indexChild) in item.children" :key="indexChild">
            <a class="dropdown-item" href="#">
              {{ child.label }}
            </a>
          </li>
        </ul>
      </li>
    </template>
  </ul>
</template>
<script>
import AppMenuItem from './menu-item/AppMenuItem.vue';

export default {
  name: 'AppMenu',
  components: {
    AppMenuItem,
  },
  data() {
    return {
      menuItens: [
        {
          label: 'Home', path: '/', isActive: false, icon: '', hasChildren: false,
        },
        {
          label: 'Sobre', path: '/about', isActive: false, icon: '', hasChildren: false,
        },
        {
          label: 'Produtos',
          path: '/about',
          isActive: false,
          icon: '',
          hasChildren: true,
          children: [
            {
              label: 'Carros', path: '/about', isActive: false, icon: '', hasChildren: false,
            },
            {
              label: 'Motos', path: '/about', isActive: false, icon: '', hasChildren: false,
            },
            {
              label: 'Caminhão', path: '/about', isActive: false, icon: '', hasChildren: false,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
@import "./AppMenu.css";
</style>
