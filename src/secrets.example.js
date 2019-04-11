const dev = {
  pg_host: 'dev.postgres.host',
  pg_user: 'postgres',
  pg_password: 'loveyiff'
};

const prod = {
  pg_host: 'prod.postgres.host',
  pg_user: 'postgres',
  pg_password: 'loveyiff'
};

if (process.env.PROD) {
  exports.SECRETS = prod;
} else {
  exports.SECRETS = dev;
}
