const router = require('express').Router();
const controller = require('./employee.controller');
router.get('/api/employees', controller.getAllEmployees);
router.get('/api/employees/create', controller.createEmployee);

module.exports = router;
