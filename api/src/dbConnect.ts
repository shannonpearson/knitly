const pgp = require("pg-promise")(/* options */);

const DB_USER = process.env.DB_USER;
const DB_PW = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

const connectionString = `postgres://${DB_USER}:${DB_PW}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const db = pgp(connectionString);

// db.one("SELECT $1 AS value", 123)
// 	.then((data) => {
// 		console.log("DATA:", data.value);
// 	})
// 	.catch((error) => {
// 		console.log("ERROR:", error);
// 	});
