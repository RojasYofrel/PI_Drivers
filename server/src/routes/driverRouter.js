const {Router } = require('express');
const { getDriversHandler, getDetailHandler, postDriverHandler } = require('../handlers/driverHandlers');

const driverRouter = Router();


driverRouter.get('/',getDriversHandler)

driverRouter.get('/:idDriver',getDetailHandler)

driverRouter.post('/',postDriverHandler)

module.exports = driverRouter;