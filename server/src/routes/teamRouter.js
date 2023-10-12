const {Router}= require('express');
const getTeamsHandler = require('../handlers/teamHandler');

const teamRouter = Router();



teamRouter.get('/',getTeamsHandler)

module.exports = teamRouter;