var sparkles = require('sparkles')();
const { logActivity } = require('../bull/queues/activityLogger.queue');
sparkles.on('get_employee', async (evt) => {
  await logActivity();
});

sparkles.on('create_employee', function (evt) {
    await logActivity();
});
