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
            required>
          </b-input>
        </b-field>

        <b-field label="Your Name">
          <b-input
            v-model="site.created_by"
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
            <option>Argentina</option>
            <option>Australia</option>
            <option>Austria</option>
            <option>Belarus</option>
            <option>Belgium</option>
            <option>Belize</option>
            <option>Brazil</option>
            <option>Peru</option>
            <option>Philippines</option>
            <option>Pitcairn</option>
            <option>Poland</option>
            <option>Portugal</option>
            <option>Puerto Rico</option>
            <option>Qatar</option>
            <option>Réunion</option>
            <option>Romania</option>
            <option>Russian Federation</option>
            <option>Rwanda</option>
            <option>Swaziland</option>
            <option>Sweden</option>
            <option>Switzerland</option>
            <option>Syrian Arab Republic</option>
            <option>Taiwan, Province of China</option>
            <option>Tajikistan</option>
            <option>Tanzania, United Republic of</option>
            <option>Ukraine</option>
            <option>United Arab Emirates</option>
            <option>United Kingdom</option>
            <option>United States</option>
          </b-select>
        </b-field>

        <b-field label="Site URL">
          <b-input
            v-model="site.site_url"
            type="url"
            required>
          </b-input>
        </b-field>

        <b-field label="Link to Site Picture">
          <b-input
            v-model="site.site_screenshot"
            type="url"
            required>
          </b-input>
        </b-field>

        <b-field label="Tags">
          <b-taginput
            maxtags="3"
            type="is-primary"
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

export default {
  data () {
    return {
      site: {
        title: null,
        created_by: null,
        user_location: null,
        site_screenshot: null,
        site_url: null,
        tags: {}
      }
    };
  },
  methods: {
    async create () {
      try {
        await SitesService.post(this.site);
        this.$parent.close();
        this.$router.push({
          name: 'sites'
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
