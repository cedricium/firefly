<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1
            class="title"
            v-text="site.title">
          </h1>
          <span class="favorite"
              v-if="this.$store.state.isUserLoggedIn"
              @click="toggleFavorite">
              <b-icon
                size="is-medium"
                v-show="!favorite"
                pack="fa"
                icon="star-o">
              </b-icon>
              <b-icon
                size="is-medium"
                v-show="favorite"
                pack="fa"
                icon="star">
              </b-icon>
            </span>
          <!-- <h2 class="subtitle">
            Primary subtitle
          </h2> -->
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-5 is-offset-1">
            <div class="card">
              <a
                class="card-image"
                :href="site.site_url"
                target="_blank">
                <figure class="image">
                  <img :src="site.site_screenshot" alt="Placeholder image">
                </figure>
              </a>
            </div>
          </div>
          <div class="column is-5">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <p class="site-info visit">
                    <br />
                    <a
                      :href="site.site_url"
                      v-text="site.site_url">
                    </a>
                  </p>
                  <p
                    class="site-info credit">
                    <br />
                    <a
                      :href="site.site_url"
                      v-text="site.created_by">
                    </a>
                  </p>
                  <p
                    class="site-info date">
                    <br />
                    <a
                      :href="site.site_url">
                      {{ site.createdAt | formatDate }}
                    </a>
                  </p>
                  <p
                    class="site-info categories">
                    <b-taglist>
                      <b-tag
                        v-for="tag in site.tags"
                        v-bind:key="tag"
                        v-text="tag"
                        type="is-primary">
                      </b-tag>
                    </b-taglist>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section related-sites" v-if="relatedSites.length > 0">
      <div class="container">
        <h2 class="subtitle has-text-centered">Related Sites:</h2>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-4"
            v-for="relatedSite in relatedSites.slice(0, 3)"
            v-bind:key="relatedSite.id">
            <div class="tile is-child card">
              <div class="card-image">
                <router-link
                  :to="{ name: 'site', params: { siteId: relatedSite.id, siteTitle: parseTitle(relatedSite.title) }}">
                  <figure class="image is-16by9" @click="loadSite(relatedSite.id)">
                    <img :src="relatedSite.site_screenshot" alt="Placeholder image">
                  </figure>
                </router-link>
              </div>
              <div class="card-content">
                <div class="content">
                  <router-link
                  :to="{ name: 'site', params: { siteId: relatedSite.id, siteTitle: parseTitle(relatedSite.title) }}">
                    <strong @click="loadSite(relatedSite.id)" v-text="relatedSite.title"></strong>
                  </router-link>
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
import FavoritesService from '@/services/FavoritesService';

export default {
  data () {
    return {
      site: {},
      relatedSites: [],
      favorite: null
    };
  },
  async mounted () {
    const siteId = this.$store.state.route.params.siteId;
    this.loadSite(siteId);
  },
  methods: {
    parseTitle (title) {
      return title.replace(/\s+/g, '-').toLowerCase();
    },
    async loadSite (id) {
      const siteId = id;
      this.site = (await SitesService.show(siteId)).data;
      this.relatedSites = (await SitesService.related(siteId)).data;
      if (this.$store.state.isUserLoggedIn) {
        this.favorite = (await FavoritesService.index({
          siteId: siteId,
          userId: this.$store.state.user.id
        })).data;
        // XML Parsing error on Firefox when object is empty (i.e. no favorite found).
        // This ensures that `this.favorite` will be null if no favorite is found.
        if (Object.keys(this.favorite).length === 0) {
          this.favorite = null;
        }
      }
    },
    async toggleFavorite () {
      if (this.favorite) { // delete favorite
        try {
          await FavoritesService.delete(this.favorite.id);
          this.favorite = null;
        } catch (err) {
          console.log(err);
        }
      } else { // set favorite
        try {
          this.favorite = (await FavoritesService.post({
            siteId: this.site.id,
            userId: this.$store.state.user.id
          })).data;
        } catch (err) {
          console.log(err);
        }
      }
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
h1.title,
span.favorite {
  display: inline;
}

span.favorite {
  margin-left: 0.75rem;
}

.card-image {
  padding: 0.8rem;
}

section.section.related-sites div.card {
  margin: 0 0 2rem 0;
  transition: all 250ms cubic-bezier(.02,.01,.47,1);
}

section.section.related-sites div.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
}

p.site-info::before {
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  color: hsl(0, 0%, 50%);
  font-weight: bold;
}

p.site-info.visit::before { content: 'visit'; }
p.site-info.credit::before { content: 'credit'; }
p.site-info.date::before { content: 'date posted'; }
p.site-info.categories::before { content: 'categories'; }
</style>
