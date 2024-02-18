import "dotenv/config";
import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Client } from "pg";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const DB_USER = process.env.DB_USER;
const DB_PW = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const connectionString = `postgres://${DB_USER}:${DB_PW}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const client = new Client(connectionString);

(async () => {
	await client.connect();

	client
		.query("SELECT * FROM users limit 1;")
		.then((data) => {
			console.log("DATA:", data.rows);
		})
		.catch((error: string) => {
			console.log("ERROR:", error);
		});
})();

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.post("/login", (req: Request, res: Response) => {
	console.log("LOGIN REQUEST", req.body);
	res.send("you have reached the login route!");
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
