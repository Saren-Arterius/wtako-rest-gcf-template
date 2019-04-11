import {CONFIG} from '../config';
import {knex} from '../common';

export const updateDB = async () => {
  const cloned = JSON.parse(JSON.stringify(CONFIG.knex));
  cloned.connection.database = 'postgres';
  const createKnex = require('knex')(cloned);
  console.log('[DB] Syncing database');
  const rows = await createKnex('pg_catalog.pg_database').select().where('datname', CONFIG.knex.connection.database);
  if (!rows.length) {
    console.log('[DB] Creating database');
    await createKnex.raw(`CREATE DATABASE ${CONFIG.knex.connection.database}`);
    console.log('[DB] Creating extension');
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  }
  console.log('[DB] knex migrate:latest');
  await knex.migrate.latest();
};

(async () => {
  await updateDB();
  process.exit();
})();

