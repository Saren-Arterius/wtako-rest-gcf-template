# OwO what's this
Express + knex + pgsql + pgadmin + nodemon + babel + eslint for @google-cloud/functions-emulator

# Deploy env
1. Ensure `nvm` and `docker-compose` installed
2. `$ ./init-node.sh`

# Dev start
1. `$ yarn sync-db`
2. `$ yarn dev`

# Reset DB (Do NOT run in production)
1. `$ yarn reset-db`

# Access pgAdmin
1. `$ yarn pgadmin` on your local/remote machine
2. If remote, `$ ssh <server ip> -L 31300:localhost:31300`
3. Open http://localhost:31300/browser/
4. Login (email: admin@example.com, password: password)
5. Create new server (host: ???, username: postgres, password: ???)