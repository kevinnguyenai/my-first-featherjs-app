const logger = require('../logger');


module.exports = function (options = {}) {
  return function metrictor(req, res, next) {
    logger.info(options + 'metrictor middleware is running');
    next();
  };
};
