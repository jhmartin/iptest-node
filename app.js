#!/usr/bin/env node
const requestp = require('request');
const request = require('request');
var http = require("http");

var agent = new http.Agent({
  keepAlive: true,
  maxSockets: 2,
  keepAliveMsecs: 9000
})


//https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
for (i = 10000; i > 0; i--) { 
 request.get({url: 'http://ip' }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log("SIMPLE\t", body.trim());
  });
}

for (i = 10000; i > 0; i--) { 
  requestp.get({url: 'http://ip',  agent: agent}, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log("PERSISTENT\t", body.trim());
  });
}
