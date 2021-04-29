const { Router } = require('express');
const { packingRouter } = require('./packing-list');

const apiRouter = Router();

apiRouter.get('/packing-list', packingRouter);

module.exports = {
  apiRouter,
};