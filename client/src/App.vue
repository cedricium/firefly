<template>
  <div id="app">
    <page-header />
    <router-view />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue';
import PageFooter from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  }
};
</script>

<style>
body {
  padding-top: 3.25rem !important;
  background: #f9f9f9 url("./assets/background/geometry.png") repeat scroll 0% 0%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a:hover { color: hsl(0, 0%, 15%); }

div.modal {
  z-index: 50;
}

div.card {
  box-shadow: 0 2px 10px rgba(0,0,0,.1);
}

div.dropdown-menu {
  padding-top: 0 !important;
}
</style>
