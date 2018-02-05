<template>
  <div>
  </div>
</template>

<script>
import SitesService from '@/services/SitesService';

export default {
  data () {
    return {
      site: null
    };
  },
  async mounted () {
    const siteId = this.$store.state.route.params.siteId;
    this.site = await SitesService.show(siteId);
  }
};
</script>

<style>

</style>
