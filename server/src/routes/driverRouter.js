const {Router } = require('express');
const { getDriversHandler,getDetailHandler, postDriver } = require('../handlers/driverHandlers');

const driverRouter = Router();


driverRouter.get('/',getDriversHandler);
driverRouter.get('/:id',getDetailHandler);
driverRouter.post('/', postDriver);



module.exports = driverRouter;