const { Client } = require("pg");
const config = require('./pgsql.env');

const client = new Client(config.config);

client.connect().catch((err) => {
  console.log('Error', err);
});

const postStuff = (title, link, description) => {
  return client.query(`INSERT INTO stuff (title, link, description) VALUES ('${title}', '${link}', '${description}')`)
  .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log('postStuff', err);
    })
}

const getAllStuff = () => {
  return client.query(`SELECT * FROM stuff`)
}

const editStuff = (id, title, link, description) => {
  return client.query(`UPDATE stuff SET title='${title}',
  link='${link}',
  description='${description}'
  WHERE stuff_id=${id}`)
  .then((result) => {
    return result;
  })
  .catch((err) => {
    console.log('editStuff', err);
  })
}

const deleteStuff = (id) => {
  return client.query(`DELETE FROM stuff WHERE stuff_id=${id}`)
  .then((result) => {
    return result;
  })
  .catch((err) => {
    console.log('------------- controllers.deleteStuff error ------------', err);
  })
}


module.exports = {
  postStuff,
  getAllStuff,
  editStuff,
  deleteStuff
};
