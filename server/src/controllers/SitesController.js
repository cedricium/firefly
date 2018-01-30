const {Site} = require('../models');

module.exports = {
  async index (req, res) {
    try {
      const sites = await Site.findAll({
        limit: 20
      });
      res.send(sites);
    } catch (err) {
      res.status(500).send({
        error: 'An error occurred trying to fetch the sites.'
      });
    }
  },
  async post (req, res) {
    try {
      const site = await Site.create(req.body);
      res.send(site);
    } catch (err) {
      res.status(500).send({
        error: 'An error occurred trying to create the site.'
      });
    }
  }
};
