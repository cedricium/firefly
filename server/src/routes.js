const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const SitesController = require('./controllers/SitesController');

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);
  app.post('/login',
    AuthenticationController.login);

  app.get('/sites',
    SitesController.index);
  app.get('/sites/:siteId',
    SitesController.show);
  app.get('/sites/:siteId/related',
    SitesController.related);
  app.post('/sites',
    SitesController.post);
  app.delete('/sites/:siteId',
    SitesController.delete);
};
