const { Client } = require("pg");
const config = require('../db/pgsql.env');

const client = new Client(config.config);

client.connect().catch((err) => {
  console.log('Error', err);
});

const postPack = (name, quantity) => {
  return client.query(`INSERT INTO packing_list (name, quantity) VALUES ('${name}', '${quantity}')`)
  .then((result) => {
    return result;
  })
  .catch((err) => {
    console.log('postPack', err)
  })
}


module.exports = {
  postPack
};