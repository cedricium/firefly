<template>
  <div id="app">
    <page-header />
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    PageHeader
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html {
  padding-top: 3.25rem;
}

html,
body {
  background: #f9f9f9;
}
</style>
