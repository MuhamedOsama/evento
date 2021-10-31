const Bull = require('bull');
const activityLoggerProcess = require('../processes/activityLogger.process');
const activityLoggerQueue = new Bull('activityLogger', {
  redis: {
    host: 'redis-13176.c250.eu-central-1-1.ec2.cloud.redislabs.com',
    password: 'AKohZh6vUFo0QA8sETyl581Z5bPFtVbB',
    port: 13176,
  },
});
activityLoggerQueue.process(activityLoggerProcess);
const logActivity = (data) => {
  activityLoggerQueue.add(data, {});
};
module.exports = {
  logActivity,
};
