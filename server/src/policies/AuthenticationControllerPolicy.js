const Joi = require('joi');

module.exports = {
  register (req, res, next) {
    const schema = {
      name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    };

    const {error, value} = Joi.validate(req.body, schema);
    
    if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: 'Please enter a name (can be updated later).'
          });
          break;
        case 'email':
          res.status(400).send({
            error: 'You must enter a valid email address.'
          });
          break;
        case 'password':
          res.status(400).send({
            error: `Passwords must contain at least eight (8) characters
            but no more than thirty-two (32), including upper and lowercase
            letters as well as numbers.`
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information.'
          });
          break;
      }
    } else {
      next()
    }
  }
};
