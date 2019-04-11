import {CONFIG} from './config';

const knexConfig = Object.assign({}, CONFIG.knex);
knexConfig.pool = {
  afterCreate (connection, callback) {
    connection.query(`SET TIME ZONE "${CONFIG.timezone.postgres}"`, (err) => {
      callback(err, connection);
    });
  }
};

export const knex = require('knex')(knexConfig);
