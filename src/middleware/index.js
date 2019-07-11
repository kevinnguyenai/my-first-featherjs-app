const metrictor = require('./metrictor');


const oauth2 = require('./oauth2');


// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.use('/request', metrictor());
  app.use('/auth', oauth2());
};
