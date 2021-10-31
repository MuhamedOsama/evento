const sparkles = require('sparkles')();
module.exports = {
  getAllEmployees: async () => {
    sparkles.emit('get_employee');
    return [{ id: 1, name: 'mohamed osama' }];
  },
  createEmployee: async (employee) => {
    sparkles.emit('create_employee', employee);
    return employee;
  },
};
