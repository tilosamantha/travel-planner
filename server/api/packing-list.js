// const express = require("express");
// const app = express();
// const packController = require('../packing-controller');

// module.exports = function(app) {

//   app.post(('/packing'), (req, res) => {
//     const { name, quantity } = req.body;
//     packController.postPack(name, quantity)
//     .then((result) => {
//       res.json(result)
//     })
//     .catch((err) => {
//       console.log("PACKING-LIST.JS ERROR", err);
//       res.sendStatus(400);
//     });
//   });

// }
  



// const { Router } = require('express');

// const packingRouter = Router();
// const packingController = require('../packing-controller');


// // packingRouter.get()

// packingRouter.post('/api/packing-list', (req, res) => {
//   const { name, quantity } = req.body;
//   packingController.postPack(name, quantity)
//   .then((result) => {
//     res.json(result)
//   })
//   .catch((err) => {
//     console.log( 'PACKING ROUTER ERROR', err);
//     res.sendStatus(400);
//   })
// })

// // packingRouter.put()

// // packingRouter.delete()

// module.exports = {packingRouter};


