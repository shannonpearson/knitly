"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// import supertokens from "supertokens-node";
const express_2 = require("supertokens-node/framework/express");
const pg_1 = require("pg");
const express_3 = require("supertokens-node/framework/express");
const auth_1 = __importDefault(require("./auth"));
(0, auth_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// {
// origin: "https://localhost:5173",
// allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
// credentials: true,
// }
app.use((0, express_2.middleware)());
const DB_USER = process.env.DB_USER;
const DB_PW = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const connectionString = `postgres://${DB_USER}:${DB_PW}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const client = new pg_1.Client(connectionString);
(async () => {
    await client.connect();
    client
        .query("SELECT * FROM users limit 1;")
        .then((data) => {
        console.log("DATA:", data.rows);
    })
        .catch((error) => {
        console.log("ERROR:", error);
    });
})();
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.post("/login", (req, res) => {
    console.log("LOGIN REQUEST", req.body);
    res.send("you have reached the login route!");
});
app.use((0, express_3.errorHandler)());
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
