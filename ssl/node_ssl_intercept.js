#! /usr/bin/env node
'use strict';

/**
 * Example node script that makes an HTTPS request.
 *
 * When the SSL_CERT_FILE environment variable is configured,
 * it is used to confgirue the default HTTPS agent certificate authorities.
 *
 * Based on example from
 * https://nodejs.org/api/https.html#https_https_request_options_callback
 *
 * Jeremy Fee <jmfee@usgs.gov>
 * 2017-06-06
 */


const fs = require('fs');
const https = require('https');


/**
 * Read an SSL Certificate bundle.
 *
 * @param file {String}
 *        path to certificate bundle file, in PEM format.
 * @return {Array<String>}
 *         array of individual certificates found in bundle.
 */
function readSslCertFile (file) {
  var cert,
      certs,
      contents;

  certs = [];
  cert = [];

  contents = fs.readFileSync(file, 'utf-8');
  contents.split('\n').forEach(function (line) {
    cert.push(line);
    if (line.startsWith('-----END ')) {
      certs.push(cert.join('\n'));
      cert = [];
    }
  });

  return certs;
}

// update default https agent configuration
if (process.env.SSL_CERT_FILE) {
  https.globalAgent.options.ca = readSslCertFile(process.env.SSL_CERT_FILE);
}


// request google home page
const options = {
  hostname: 'www.google.com',
  port: 443,
  path: '/',
  method: 'GET'
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
