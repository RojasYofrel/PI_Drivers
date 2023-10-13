const {Router } = require('express');
const { getDriversHandler,getDetailHandler } = require('../handlers/driverHandlers');

const driverRouter = Router();


driverRouter.get('/',getDriversHandler);
driverRouter.get('/:id',getDetailHandler);


module.exports = driverRouter;