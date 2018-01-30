const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const SitesController = require('./controllers/SitesController');

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post('/login',
    AuthenticationController.login
  );

  app.get('/sites',
    SitesController.index
  );
  app.post('/sites',
    SitesController.post
  );
};
