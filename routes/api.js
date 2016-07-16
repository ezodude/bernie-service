'use strict';

const moment   = require('moment');

const health = function(request, reply){
  reply(null, {
    status: 'ok',
    timestamp: moment().utc().toISOString()
  }).code(200);
};

module.exports = [
  {
    method: 'GET',
    path:'/api/v1/health',
    handler: health,
    config: {
      description: 'Gives API status',
      tags: ['api', 'health']
    }
  }
];