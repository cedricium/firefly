<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1
            class="title"
            v-text="site.title">
          </h1>
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
  </div>
</template>

<script>
import moment from 'moment';
import SitesService from '@/services/SitesService';

export default {
  data () {
    return {
      site: {}
    };
  },
  async mounted () {
    const siteId = this.$store.state.route.params.siteId;
    this.site = (await SitesService.show(siteId)).data;
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
.card-image {
  padding: 0.8rem;
}

p.site-info::before {
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  color: rgba(42, 40, 41, 0.5);
  font-weight: bold;
}

p.site-info.visit::before { content: 'visit'; }
p.site-info.credit::before { content: 'credit'; }
p.site-info.date::before { content: 'date posted'; }
p.site-info.categories::before { content: 'categories'; }
</style>
