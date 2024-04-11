# Local development

### Client

- create .env.local and populate fields (see .env.sample)
- ```npm install```
- ```npm run dev```

### Server
- create .env and populate fields (see .env.sample)
- ```npm i```
- ```npm run dev```
- if the schema has been changed, a migration will need to be created. in this case, follow the instructions in the terminal.


### Database
The database is created within a docker container.
```docker-compose up```