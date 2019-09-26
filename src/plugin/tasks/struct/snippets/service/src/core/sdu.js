const serviceDiscoveryUtil = require('@loopmediagroup/service-discovery-util');

module.exports = serviceDiscoveryUtil({
  serviceDiscoveryUrl: process.env.SERVICE_DISCOVERY_URL,
  accessKeyId: process.env.INTER_SERVICE_ACCESS_KEY_ID,
  secretAccessKey: process.env.INTER_SERVICE_SECRET_ACCESS_KEY
});
