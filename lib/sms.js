'use strict';

const twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Send the text message.
module.exports = function (opts) {
  if(!opts) opts = {};

  return client.sendMessage({
    to: opts.sendTo,
    from: process.env.TWILIO_NUMBER,
    body: opts.message
  });
};