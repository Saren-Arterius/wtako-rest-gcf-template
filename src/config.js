import {SECRETS} from './secrets';

const dev = {
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
      database: 'wtako_rest_gcf_template_dev'
    }
  },
  firebase: {
    // REDACTED
  }
};

const prod = {
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
      database: 'wtako_rest_gcf_template_prod'
    }
  },
  firebase: {
    // REDACTED
  }
};

if (process.env.PROD) {
  exports.CONFIG = prod;
} else {
  exports.CONFIG = dev;
}
