<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <h2 class="title is-2 has-text-centered">Register</h2>
            <b-field label="Name">
              <b-input
                size="is-medium"
                icon-pack="fa"
                icon="user"
                name="name"
                v-model="name"
                placeholder="Jane Smith">
              </b-input>
            </b-field>
            <b-field label="Email">
              <b-input
                size="is-medium"
                icon-pack="fa"
                icon="envelope"
                type="email"
                name="email"
                v-model="email"
                placeholder="johndoe@example.com">
              </b-input>
            </b-field>
            <b-field label="Password">
              <b-input
                size="is-medium"
                icon-pack="fa"
                icon="unlock"
                type="password"
                name="password"
                v-model="password"
                placeholder="••••••••"
                password-reveal>
              </b-input>
            </b-field>
            <b-notification
              type="is-danger"
              v-text="error"
              :active.sync="isActive">
            </b-notification>
            <button
              class="button is-primary is-medium is-fullwidth"
              @click="register">
              Register
            </button>
          </div>
          <div class="content has-text-centered">
            Already have an account? <router-link :to="{name: 'login'}">Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      error: null,
      isActive: false
    };
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          name: this.name,
          email: this.email,
          password: this.password
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.isActive = false;
        this.$router.push({name: 'sites'});
      } catch (error) {
        this.error = error.response.data.error;
        this.isActive = true;
      };
    }
  }
};
</script>

<style scoped>

</style>
