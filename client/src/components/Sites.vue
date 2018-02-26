<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-4 is-variable">
          <div class="column is-4">
            <div class="card"
              v-for="site in col1Sites"
              v-bind:key="site.id">
              <div class="card-image">
                <router-link :to="{name: 'site',
                  params: { siteId: site.id, siteTitle: parseTitle(site.title) }}">
                  <figure class="image is-16by9">
                    <img :src="site.site_screenshot" alt="Placeholder image">
                  </figure>
                </router-link>
              </div>
              <div class="card-content">
                <div class="content">
                  <router-link :to="{name: 'site',
                  params: { siteId: site.id, siteTitle: parseTitle(site.title) }}">
                    <strong v-text="site.title"></strong>
                  </router-link>
                  <p class="date is-size-7">added {{ site.createdAt | formatDate }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card"
              v-for="site in col2Sites"
              v-bind:key="site.id">
              <div class="card-image">
                <router-link :to="{name: 'site',
                  params: { siteId: site.id, siteTitle: parseTitle(site.title) }}">
                  <figure class="image is-16by9">
                    <img :src="site.site_screenshot" alt="Placeholder image">
                  </figure>
                </router-link>
              </div>
              <div class="card-content">
                <div class="content">
                  <router-link :to="{name: 'site',
                  params: { siteId: site.id, siteTitle: parseTitle(site.title) }}">
                    <strong v-text="site.title"></strong>
                  </router-link>
                  <p class="date is-size-7">added {{ site.createdAt | formatDate }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card"
              v-for="site in col3Sites"
              v-bind:key="site.id">
              <div class="card-image">
                <router-link :to="{name: 'site',
                  params: { siteId: site.id, siteTitle: parseTitle(site.title) }}">
                  <figure class="image is-16by9">
                    <img :src="site.site_screenshot" alt="Placeholder image">
                  </figure>
                </router-link>
              </div>
              <div class="card-content">
                <div class="content">
                  <router-link :to="{name: 'site',
                  params: { siteId: site.id, siteTitle: parseTitle(site.title) }}">
                    <strong v-text="site.title"></strong>
                  </router-link>
                  <p class="date is-size-7">added {{ site.createdAt | formatDate }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment';
import SitesService from '@/services/SitesService';

export default {
  data () {
    return {
      sites: []
    };
  },
  computed: {
    col1Sites () {
      return this.sites.slice(0).filter((el, index, array) => {
        return (index % 3 === 0);
      });
    },
    col2Sites () {
      return this.sites.slice(0).filter((el, index, array) => {
        return (index % 3 === 1);
      });
    },
    col3Sites () {
      return this.sites.slice(0).filter((el, index, array) => {
        return (index % 3 === 2);
      });
    }
  },
  methods: {
    parseTitle (title) {
      return title.replace(/\s+/g, '-').toLowerCase();
    }
  },
  filters: {
    formatDate (value) {
      if (value) {
        return moment(String(value)).fromNow();
      }
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.sites = (await SitesService.index(value)).data;
      }
    }
  }
};
</script>

<style scoped>
div.card {
  margin: 0 0 2rem 0;
  transition: all 250ms cubic-bezier(.02,.01,.47,1);
}

div.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
}

.card-image {
  position: relative;
}

p.date { color: hsl(0, 0%, 50%); }
</style>
