const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const local = require('@feathersjs/authentication-local');
const oauth2 = require('@feathersjs/authentication-oauth2');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const GithubStrategy = require('passport-github');
const EmailFirstOAuth2Verifier = require('./verifiers/verifier.google');
const makeHandler = require('./oauth-handler');

module.exports = function (app) {
  const config = app.get('authentication');

  // Create a handler by passing the `app` object.
  const handler = makeHandler(app);

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local());


  app.configure(oauth2(Object.assign({
    name: 'google',
    Strategy: GoogleStrategy,
    Verifier: EmailFirstOAuth2Verifier,
    emailField: 'email'
  }, config.google)));

  app.configure(oauth2(Object.assign({
    name: 'facebook',
    Strategy: FacebookStrategy
  }, config.facebook)));

  app.configure(oauth2(Object.assign({
    name: 'github',
    Strategy: GithubStrategy,
    handler: handler(config.github.successRedirect)
  }, config.github)));

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies)
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    }
  });
};
