/* eslint-disable global-require */

const { createConnection } = require('typeorm');

async function connect() {
  try {
    return await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: 'pim',
      synchronize: 'true',
      logging: false,
      entities: [require('../schemas/BeerSchema')],
    });
  } catch (err) {
    return console.error(err);
  }
}

module.exports = {
  connect,
};
