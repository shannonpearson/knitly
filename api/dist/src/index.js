"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const supertokens_node_1 = __importDefault(require("supertokens-node"));
const express_2 = require("supertokens-node/framework/express");
const express_3 = require("supertokens-node/framework/express");
const auth_1 = __importDefault(require("./auth"));
const client_1 = __importDefault(require("../services/db/client"));
(0, auth_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    allowedHeaders: ["content-type", ...supertokens_node_1.default.getAllCORSHeaders()],
    credentials: true,
}));
app.use((0, express_2.middleware)());
(async () => {
    const users = await client_1.default.user.findMany();
    console.log("users", users);
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
