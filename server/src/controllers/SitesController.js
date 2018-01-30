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
  },
  async delete (req, res) {
    try {
      const {siteId} = req.params;
      const site = await Site.findOne({
        where: {
          id: siteId
        }
      });
      if (!site) {
        return res.status(403).send({
          error: 'No site found with the given id.'
        });
      }
      await site.destroy();
      res.send(site);
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to delete the site.'
      })
    }
  }
};
