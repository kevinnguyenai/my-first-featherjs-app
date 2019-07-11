module.exports = function (options = {}) {
  return function oauth2(req, res, next) {
    console.log('oauth2 middleware is running');
    next();
  };
};
