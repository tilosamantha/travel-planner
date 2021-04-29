const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
// const { apiRouter } = require('./api');

const controllers = require('../db/controllers');
const packControllers = require('./packing-controller');
app.use(express.json());


// require('./api/packing-list')(app);

// // app.use('/api', apiRouter);
// app.use('/api/packing-list', pack)



// app.use('/', express.static(__dirname + '/public'));
app.use(express.static('public'))

app.post(('/stuff'), (req, res) => {
  const { title, link, description } = req.body;
  controllers.postStuff(title, link, description)
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.log( 'error posting stuff', err);
    res.sendStatus(400);
  })
})

app.get(('/stuff'), (req, res) => {
  controllers.getAllStuff()
  .then((result) => {
    return res.json(result);
  })
  .catch((err) => {
    console.log( 'error returning all stuff', err);
    res.sendStatus(400)
  })
})

app.put('/stuff/:id', (req, res) => {
  const { id, title, link, description } = req.body;
  controllers.editStuff(id, title, link, description)
  .then((result) => {
    return res.json(result);
    res.send("listing has been edited successfully")
  })
  .catch((err) => {
    console.log('error editing stuff', err);
    res.sendStatus(400)
  })
})

app.delete('/stuff/:id', (req, res) => {
  let id = req.params.id;
  controllers.deleteStuff(id)
  .then((result) => {
    return res.json(result);
  })
  .catch((err) => {
    console.log( 'error deleting item', err);
    res.sendStatus(400)
  })
})


//packpost
app.post(('/what-to-pack'), (req, res) => {
  const { name, quantity } = req.body;
  packControllers.postPack(name, quantity)
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.log( 'error posting item to pack', err);
    res.sendStatus(400);
  })
})

//packget
//packupdate
//packdelete

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});