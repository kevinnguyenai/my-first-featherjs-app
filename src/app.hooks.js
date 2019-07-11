// Application hooks that run for every service
const log = require('./hooks/log');

const flower = require('./hooks/flower');

module.exports = {
  before: {
    all: [ log() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [ log() ],
    find: [],
    get: [],
    create: [flower()],
    update: [flower()],
    patch: [flower()],
    remove: [flower()]
  },

  error: {
    all: [ log() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
