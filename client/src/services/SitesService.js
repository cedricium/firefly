import Api from '@/services/Api';

export default {
  index () {
    return Api().get('sites');
  },
  show (siteId) {
    return Api().get(`sites/${siteId}`);
  },
  post (site) {
    return Api().post('sites', site);
  }
};
