<template>
  <nav class="navbar is-fixed-top is-transparent">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{name: 'sites'}">
        <img src="@/assets/firefly_logo.png" alt="Firefly: shedding light on inspiring sites from around the web" width="112" height="28">
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
        <div class="navbar-item grouped">
          <b-field>
            <b-input placeholder="Search..."
              v-model="search"
              @keyup.enter.native="searchSites"
              icon-pack="fa"
              icon="search">
            </b-input>
          </b-field>
        </div>
        <b-dropdown
          class="navbar-item grouped">
          <button class="button is-white" slot="trigger">
            <b-icon
              size="is-small"
              pack="fa"
              icon="user">
            </b-icon>
            <span>Profile</span>
            <b-icon
              pack="fa"
              icon="caret-down">
            </b-icon>
          </button>
          <!-- Dropdown menu contents -->
          <div class="loggedIn-true"
            v-show="$store.state.isUserLoggedIn">
            <b-dropdown-item custom
              v-if="$store.state.isUserLoggedIn">
                Logged in as <b>{{ $store.state.user.name }}</b>
            </b-dropdown-item>
            <b-dropdown-item has-link>
              <router-link :to="{name: ''}">
                <b-icon
                  size="is-small"
                  pack="fa"
                  icon="star">
                </b-icon>
                <span>Favorites</span>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item has-link>
              <router-link :to="{name: ''}">
                <b-icon
                  size="is-small"
                  pack="fa"
                  icon="gear">
                </b-icon>
                <span>Account</span>
              </router-link>
            </b-dropdown-item>
            <hr class="dropdown-divider">
            <b-dropdown-item
              @click="logout">
              <b-icon
                size="is-small"
                pack="fa"
                icon="sign-out">
              </b-icon>
              <span>Logout</span>
            </b-dropdown-item>
          </div>
          <div class="loggedIn-false"
            v-show="!$store.state.isUserLoggedIn">
            <b-dropdown-item has-link>
              <router-link :to="{name: 'login'}">
                <b-icon
                  size="is-small"
                  pack="fa"
                  icon="sign-in">
                </b-icon>
                <span>Sign In</span>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item has-link>
              <router-link :to="{name: 'register'}">
                <b-icon
                  size="is-small"
                  pack="fa"
                  icon="user-plus">
                </b-icon>
                <span>Create Account</span>
              </router-link>
            </b-dropdown-item>
          </div>
        </b-dropdown>
        <div class="navbar-item grouped">
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
      search: ''
    };
  },
  methods: {
    cardModal () {
      if (this.$store.state.isUserLoggedIn) {
        this.$modal.open({
          parent: this,
          component: AddSite,
          hasModalCard: true
        });
      } else { // redirect to login page
        this.$router.push({name: 'login'});
      }
    },
    searchSites () {
      const route = {
        name: 'sites'
      };
      if (this.search !== '') {
        route.query = {
          search: this.search
        };
      }
      this.$router.push(route);
    },
    logout () {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'sites'
      });
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value;
      }
    },
    '$route.fullPath': {
      immediate: true,
      handler (value) {
        // Encode `this.search` value before checking against the route.fullPath
        // This encodes ` ` ==> `%20` so checks against the route.fullPath
        // will be more accurate, fixes #5.
        const uriEncodedSearchValue = encodeURIComponent(this.search);
        if (value !== `/?search=${uriEncodedSearchValue}`) {
          this.search = '';
        }
      }
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

.navbar-item.grouped {
  padding: 8px 6px;
}

.navbar-item.grouped:last-of-type {
  padding-right: 16px;
}

/* Reset padding to original state to properly align in hamburger menu */
@media screen and (max-width: 1020px) {
  .navbar-item.grouped {
    padding: 8px 16px;
  }
}
</style>
