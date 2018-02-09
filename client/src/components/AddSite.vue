<template>
  <form action="">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add a New Site</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Title">
          <b-input
            v-model="site.title"
            placeholder="Example"
            icon="info"
            icon-pack="fa"
            required>
          </b-input>
        </b-field>

        <b-field label="Your Country">
          <b-select
            v-model="site.user_location"
            expanded
            placeholder="Country"
            icon="globe"
            icon-pack="fa"
            required>
            <option
              v-for="country in countries"
              v-bind:key="country.code"
              :value="country.name"
              v-text="country.name">
            </option>
          </b-select>
        </b-field>

        <b-field label="Site URL">
          <b-input
            v-model="site.site_url"
            type="url"
            placeholder="http://www.example.org"
            icon="link"
            icon-pack="fa"
            required>
          </b-input>
        </b-field>

        <b-field label="Link to Site Picture">
          <b-input
            v-model="site.site_screenshot"
            type="url"
            placeholder="http://example.org/image.png"
            icon="image"
            icon-pack="fa"
            required>
          </b-input>
        </b-field>

        <b-field label="Tags">
          <b-taginput
            v-model="site.tags"
            maxtags="3"
            type="is-primary"
            icon="tags"
            icon-pack="fa"
            required>
          </b-taginput>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button
          @click="create"
          class="button is-primary">
          Create
        </button>
        <button
          class="button"
          type="button"
          @click="$parent.close()">
          Cancel
        </button>
      </footer>
    </div>
  </form>
</template>

<script>
import SitesService from '@/services/SitesService';
import CountryList from '@/assets/countries.json';

export default {
  data () {
    return {
      site: {
        title: null,
        created_by: this.$store.state.user.name,
        user_location: null,
        site_screenshot: null,
        site_url: null,
        tags: null
      },
      countries: CountryList,
      error: null
    };
  },
  methods: {
    async create () {
      this.error = null;
      const allFieldsFilledIn = Object
        .keys(this.site)
        .every(key => !!this.site[key]);

      if (!allFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.';
        return;
      }

      try {
        const site = (await SitesService.post(this.site)).data;
        this.$parent.close();
        this.$router.push({
          name: 'site',
          params: {
            siteTitle: site.title,
            siteId: site.id
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>

</style>
