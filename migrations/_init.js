exports.up = (knex, Promise) => {
  const currentUnixMSRaw = knex.raw("ROUND(EXTRACT(EPOCH FROM NOW() AT TIME ZONE 'UTC') * 1000)");
  const uuidRaw = knex.raw('uuid_generate_v4()');
  return Promise.all([
    knex.schema.createTable('user', (table) => {
      table.string('id').primary();
      table.string('email').unique().notNullable();
      table.string('access_token').unique();
      table.string('refresh_token').unique();
      table.bigInteger('access_token_expires_at_sec');
      table.bigInteger('created_at').notNullable().defaultTo(currentUnixMSRaw);
      table.index('created_at');
    }),
    knex.schema.createTable('game', (table) => {
      table.string('id').primary().defaultTo(uuidRaw);
      table.string('title').notNullable();
      table.bigInteger('created_at').notNullable().defaultTo(currentUnixMSRaw);
      table.index('created_at');
    })
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('user'),
    knex.schema.dropTable('game')
  ]);
};

