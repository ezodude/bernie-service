'use strict';

var Hapi    = require('hapi')
  , Cors    = require('hapi-cors')
  , Good    = require('good')
  , path    = require('path')
  , api  = require('./routes/api');

var server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 8080
});

server.register([
  {
    register: Cors
  },
  {
    register: Good,
    options: {
      reporters: [{
        reporter: require('good-console'),
        events: {
          response: '*',
          log: '*',
          error: '*'
        }
      }]
    }
  }
], function(err){
  if (err) {
    throw err;
  }

  server.route(api);

  server.start(function(){
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});