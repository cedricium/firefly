import Api from '@/services/Api';

export default {
  index (favorite) {
    return Api().get('favorites', {
      params: favorite
    });
  },
  post (favorite) {
    return Api().post('favorites', favorite);
  },
  delete (favoriteId) {
    return Api().delete(`favorites/${favoriteId}`);
  }
};
