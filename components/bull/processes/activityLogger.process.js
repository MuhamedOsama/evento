const { Job } = require('bull');

const activityLoggerProcess = async (job) => {
  // save to db logic here using loggerService
  console.log('hello', job.data);
};

module.exports = activityLoggerProcess;
