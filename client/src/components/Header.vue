<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{name: 'home'}">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </router-link>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" :to="{name: 'sites'}">
          Browse
        </router-link>
        <div class="navbar-item"
          v-show="$store.state.isUserLoggedIn">
          <div class="field is-grouped">
            <div class="control">
              <router-link class="button" :to="{name: ''}">
                Add Site
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item"
          v-show="!$store.state.isUserLoggedIn">
          <div class="field is-grouped">
            <p class="control">
              <router-link class="button" :to="{name: 'login'}">
                Sign In
              </router-link>
            </p>
            <p class="control">
              <router-link class="button is-primary" :to="{name: 'register'}">
                Sign Up
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
document.addEventListener('DOMContentLoaded', function () {
  let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        let target = $el.dataset.target;
        let $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
</script>

<style scoped>
nav.navbar {
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
</style>
