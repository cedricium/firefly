<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <h1 class="title is-1 has-text-centered">Login</h1>
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
                placeholder="••••••••">
              </b-input>
            </b-field>
            <b-notification
              type="is-danger"
              v-text="error"
              :active.sync="isActive">
            </b-notification>
            <button
              class="button is-primary is-medium is-fullwidth"
              @click="login">
              Login
            </button>
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
      email: '',
      password: '',
      error: null,
      isActive: false
    };
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        console.log(response.data);
        this.isActive = false;
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
