<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <div class="card"
              v-for="site in col1Sites"
              v-bind:key="site.id">
              <div class="card-image">
                <router-link :to="{name: 'site',
                  params: { siteId: site.id, siteTitle: parseTitle(site.title) }}">
                  <figure class="image is-16by9">
                    <img :src="site.site_screenshot" alt="Placeholder image">
                    <div class="overlay">
                    </div>
                  </figure>
                </router-link>
              </div>
              <div class="card-content">
                <div class="content">
                  <p class="title-tags"><strong v-text="site.title"></strong></p>
                  <p>by <router-link :to="{name: ''}"> {{site.created_by }}</router-link> from <span v-text="site.user_location"></span></p>
                  <p>added on {{ site.createdAt | formatDate }}</p>
                </div>
                <div>
                  <b-taglist>
                    <b-tag
                      v-for="tag in site.tags"
                      v-bind:key="tag"
                      v-text="tag"
                      type="is-primary">
                    </b-tag>
                  </b-taglist>
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
                    <div class="overlay">
                    </div>
                  </figure>
                </router-link>
              </div>
              <div class="card-content">
                <div class="content">
                  <p><strong v-text="site.title"></strong></p>
                  <p>by <router-link :to="{name: ''}"> {{site.created_by }}</router-link> from <span v-text="site.user_location"></span></p>
                  <p>added on {{ site.createdAt | formatDate }}</p>
                </div>
                <div>
                  <b-taglist>
                    <b-tag
                      v-for="tag in site.tags"
                      v-bind:key="tag"
                      v-text="tag"
                      type="is-primary">
                    </b-tag>
                  </b-taglist>
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
                    <div class="overlay">
                    </div>
                  </figure>
                </router-link>
              </div>
              <div class="card-content">
                <div class="content">
                  <p><strong v-text="site.title"></strong></p>
                  <p>by <router-link :to="{name: ''}"> {{site.created_by }}</router-link> from <span v-text="site.user_location"></span></p>
                  <p>added on {{ site.createdAt | formatDate }}</p>
                </div>
                <div>
                  <b-taglist>
                    <b-tag
                      v-for="tag in site.tags"
                      v-bind:key="tag"
                      v-text="tag"
                      type="is-primary">
                    </b-tag>
                  </b-taglist>
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
  async mounted () {
    this.sites = (await SitesService.index()).data;
    console.log(this.sites);
  },
  computed: {
    col1Sites () {
      return this.sites.filter((el, index, array) => {
        return (index % 3 === 0);
      });
    },
    col2Sites () {
      return this.sites.filter((el, index, array) => {
        return (index % 3 === 1);
      });
    },
    col3Sites () {
      return this.sites.filter((el, index, array) => {
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
        return moment(String(value)).format('MMMM Do YYYY');
      }
    }
  }
};
</script>

<style scoped>

.title-tags {
  display: flex;
  flex-flow: row nowrap;
  /* justify-content: space-between;
  align-content: space-between;
  align-items: flex-start; */
}

.title-tags * {
  flex: 1 1;
}

div.card {
  margin: 0 0 1rem 0;
}

.card-image {
  position: relative;
}

.overlay {
  display: none;
  position: relative;
}

.external-link {
  position: absolute;
  bottom: 5px;
  right: 10px;
}

.card-image:hover .overlay {
  width: 100%;
  height: 100%;
  background: rgba(42, 40, 41, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  color: #fff;
}
</style>
