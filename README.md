# OwO what's this
Express + knex + pgsql + pgadmin + nodemon + babel + eslint for @google-cloud/functions-emulator

# Workflow
1. Ensure `nvm`, `gcloud` and `docker-compose` installed
2. `$ ./init-node.sh` to initialize node 6 and node dependencies
3. Assume pgsql will be used, edit `src/config.js` and `src/secrets.js` for connection details
4. Edit `migrations/_init.js` for DB schema
5. `$ yarn sync-db`
6. `$ yarn dev` and open the URL
7. Write your code inside `src`, access pgAdmin when needed, reset DB when needed
9. Ensure gcloud is correctly setup, edit package.json for gcf deploy configs and `$ yarn deploy`

# Reset DB (Do NOT run in production)
1. `$ yarn reset-db`

# Access pgAdmin
1. `$ yarn pgadmin` on your local/remote machine
2. If remote, `$ ssh <server ip> -L 31300:localhost:31300`
3. Open http://localhost:31300/browser/
4. Login (email: admin@example.com, password: password)
5. Create new server (host: ???, username: postgres, password: ???)
