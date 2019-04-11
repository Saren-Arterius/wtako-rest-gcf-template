import {CONFIG} from '../config';

export const dropDB = async () => {
  const cloned = JSON.parse(JSON.stringify(CONFIG.knex));
  cloned.connection.database = 'postgres';
  const createKnex = require('knex')(cloned);
  console.log('[DB] Dropping database');
  try {
    await createKnex.raw(`DROP DATABASE ${CONFIG.knex.connection.database}`);
  } catch (e) {
    console.error(e);
  }
};

(async () => {
  await dropDB();
  process.exit();
})();

