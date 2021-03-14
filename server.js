const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

const controllers = require('./db/controllers');
app.use(express.json());


app.use('/', express.static(__dirname + '/public'));

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

// get all stuff
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

//edit stuff by id
app.put(('/stuff/:id'), (req, res) => {
  const { title, link, description } = req.body;
  let id = req.params.id;
  controllers.editStuff(id, title, link, description)
  .then((result) => {
    res.json(result);
    res.send("listing has been edited successfully")
  })
  .catch((err) => {
    console.log('error editing stuff', err);
    res.sendStatus(400)
  })
})

//delete stuff by id
app.delete('/stuff/:id', (req, res) => {
  let id = req.params.id;
  controllers.deleteStuff(id)
  .then((result) => {
    return res.json(result);
    res.send('listing has been deleted')
  })
  .catch((err) => {
    console.log( 'error deleting item', err);
    res.sendStatus(400)
  })
})


app.get('*', (req, res) => {
  res.sendFile(Path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
