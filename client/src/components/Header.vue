<template>
  <nav class="navbar is-fixed-top is-transparent">
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
      </div>

      <div class="navbar-end">
        <div class="navbar-item custom-grouped">
          <router-link class="button is-white" :to="{name: 'home'}">
            <b-icon
              pack="fa"
              icon="home">
            </b-icon>
            <span>Home</span>
          </router-link>
        </div>
        <div class="navbar-item custom-grouped">
          <router-link class="button is-white" :to="{name: 'sites'}">
            <b-icon
              pack="fa"
              icon="compass">
            </b-icon>
            <span>Explore</span>
          </router-link>
        </div>
        <b-dropdown
          class="navbar-item custom-grouped"
          hoverable
          v-show="$store.state.isUserLoggedIn">
          <button class="button is-white" slot="trigger">
            <b-icon
              pack="fa"
              icon="user">
            </b-icon>
            <span>Profile</span>
            <b-icon
              pack="fa"
              icon="caret-down">
            </b-icon>
          </button>
          <b-dropdown-item has-link>
            <router-link :to="{name: ''}">
              <b-icon
                pack="fa"
                icon="star">
              </b-icon>
              <span>Favorites</span>
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item has-link>
            <router-link :to="{name: ''}">
              <b-icon
                pack="fa"
                icon="gear">
              </b-icon>
              <span>Account</span>
            </router-link>
          </b-dropdown-item>
        </b-dropdown>
        <div class="navbar-item custom-grouped custom-grouped__last"
          v-show="$store.state.isUserLoggedIn">
          <button
            class="button is-primary"
            @click="cardModal">
            <b-icon
              size="is-small"
              pack="fa"
              icon="plus">
            </b-icon>
            <span>Add Site</span>
          </button>
        </div>
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
import AddSite from './AddSite';

export default {
  data () {
    return {
      isCardModalActive: false,
      formProps: {
        email: 'hell@cedricmaya.me'
      }
    };
  },
  methods: {
    cardModal () {
      this.$modal.open({
        parent: this,
        component: AddSite,
        hasModalCard: true
      });
    }
  }
};

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

.navbar-item.custom-grouped {
  padding: 8px 4px;
}

.navbar-item.custom-grouped__last {
  padding-right: 16px;
}

/* Reset padding to original state to properly align in hamburger menu */
@media screen and (max-width: 1020px) {
  .navbar-item.custom-grouped {
    padding: 8px 16px;
  }
}
</style>
