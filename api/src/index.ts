import "dotenv/config";
import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import supertokens from "supertokens-node";
import { middleware as stMiddleware } from "supertokens-node/framework/express";
import { errorHandler as stErrorHandler } from "supertokens-node/framework/express";
import initAuth from "./auth";

initAuth();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
	cors({
		origin: ["http://localhost:3000", "http://localhost:5173"],
		allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
		credentials: true,
	})
);

app.use(stMiddleware());

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.post("/login", (req: Request, res: Response) => {
	console.log("LOGIN REQUEST", req.body);
	res.send("you have reached the login route!");
});

app.use(stErrorHandler());

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
