const catchAsync = require('../../utils/catchAsync');
const service = require('./employee.service');
module.exports = {
  getAllEmployees: catchAsync(async (req, res, next) => {
    const employees = await service.getAllEmployees();
    res.json({
      status: 'success',
      data: {
        employees,
      },
    });
  }),
  createEmployee: catchAsync(async (req, res, next) => {
    const employee = { id: 1, name: 'new employee name' };
    const newEmployee = await service.createEmployee(employee);
    res.json({
      status: 'success',
      data: {
        newEmployee,
      },
    });
  }),
};
