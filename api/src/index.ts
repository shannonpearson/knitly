import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

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
