const app = require('express')();
require('./components/activityLogger/activitylogger.listener');
const employeesRoutes = require('./components/employee/employee.routes');
app.listen(3000, () => console.log('app started on 3000'));
app.use(employeesRoutes);
