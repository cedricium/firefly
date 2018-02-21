import Api from '@/services/Api';

export default {
  index (searchValue) {
    return Api().get('sites', {
      params: {
        search: searchValue
      }
    });
  },
  show (siteId) {
    return Api().get(`sites/${siteId}`);
  },
  post (site) {
    return Api().post('sites', site);
  }
};
