/* eslint-disable no-console */
'use strict';

const logger = require('./logger');
const app = require('./app');
const port = app.get('port');
const https_port = app.get('https_port');
const server1 = app.listen(port);
const https = require('https');
const fs = require('fs');


const server2 = https.createServer({
  key: fs.readFileSync('./crt/private.key'),
  cert: fs.readFileSync('./crt/certificate.crt'),
  ca: fs.readFileSync('./crt/ca_bundle.crt'),
}, app).listen(https_port);


process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server1.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);

server2.on('listening', () =>
  logger.info('Feathers application starts on https://%s:%d', app.get('host'), https_port)
);