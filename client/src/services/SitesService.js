import Api from '@/services/Api';

export default {
  index () {
    return Api().get('sites');
  },
  post (site) {
    return Api().post('sites', site);
  }
};
