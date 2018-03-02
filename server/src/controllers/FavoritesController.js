const {Favorite} = require('../models');

module.exports = {
  async index (req, res) {
    try {
      const {siteId, userId} = req.query;
      const favorite = await Favorite.findOne({
        where: {
          SiteId: siteId,
          UserId: userId
        }
      });
      res.send(favorite || {});
    } catch (err) {
      res.status(500).send({
        error: 'An error occurred trying to fetch the favorite.'
      });
    }
  },
  async post (req, res) {
    try {
      const {siteId, userId} = req.body;
      const favorite = await Favorite.findOne({
        where: {
          SiteId: siteId,
          UserId: userId
        }
      });
      if (favorite) {
        return res.status(400).send({
          error: 'Favorite already set for this site!'
        });
      }
      const newFavorite = await Favorite.create({
        SiteId: siteId,
        UserId: userId
      });
      res.send(newFavorite);
    } catch (err) {
      res.status(500).send({
        error: 'An error occurred trying to create the favorite.'
      });
    }
  },
  async delete (req, res) {
    try {
      const {favoriteId} = req.params;
      const favorite = await Favorite.findById(favoriteId);
      await favorite.destroy();
      res.send(favorite);
    } catch (err) {
      res.status(500).send({
        error: 'An error occurred trying to delete the favorite.'
      });
    }
  }
}