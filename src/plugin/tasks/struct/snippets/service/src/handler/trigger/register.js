const { wrap } = require('lambda-cfn-hook');
const { RegisterHook } = require('../../core/sdu');

module.exports.hook = wrap(RegisterHook(process.env.SERVICE_NAME, process.env.SERVICE_URI));
