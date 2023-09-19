const routes =require('express').Router();
const MyController = require ('../controllers');
routes.get('/', MyController.awesomeFunction);
module.exports = routes;