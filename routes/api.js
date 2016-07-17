'use strict';

const moment = require('moment');

const STOLEN_PREFIX = "stl";

const health = function(request, reply){
  reply(null, {
    status: 'ok',
    timestamp: moment().utc().toISOString()
  }).code(200);
};

const bikeStatus = function(request, reply){
  const isStolen = request.params.bikeId.toLowerCase().startsWith(STOLEN_PREFIX);

  reply(null, {
    id: request.params.bikeId,
    stolen: isStolen
  }).code(200);
};

const theftNotification = function(request, reply){
  reply(null, {
    id: request.params.bikeId,
    notified_at: moment().utc().toISOString(),
    owner: 'Owner Human'
  }).code(201);
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
  },
  {
    method: 'GET',
    path:'/api/v1/bike/{bikeId}/status',
    handler: bikeStatus,
    config: {
      description: 'Gives API status',
      tags: ['api', 'bikeStatus']
    }
  },
  {
    method: 'POST',
    path:'/api/v1/bike/{bikeId}/theft/notification',
    handler: theftNotification,
    config: {
      description: 'Gives API status',
      tags: ['api', 'bikeStatus']
    }
  }
];