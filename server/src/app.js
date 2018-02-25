/* eslint no-undef: "error" */
/* eslint-env node */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');
const path = require('path');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

require('./routes')(app);

sequelize.sync()
  .then(() => {
    app.listen(config.port);
    console.log(`Server started on port: ${config.port}`);
  });
