// eslint-disable-next-line node/no-unpublished-require
const SECRETS = require('./secrets');

exports.CONFIG = {
  timezone: {
    postgres: 'Asia/Hong_Kong',
    tzoffset: 8 * 60 * 60 * 1000
  },
  knex: {
    client: 'pg',
    connection: {
      host: SECRETS.pg_host,
      user: SECRETS.pg_user,
      password: SECRETS.pg_password,
      database: 'wtako_rest_gcf_template'
    }
  },
  firebase: {
    // REDACTED
  }
};

