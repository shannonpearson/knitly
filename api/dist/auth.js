"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertokens_node_1 = __importDefault(require("supertokens-node"));
const session_1 = __importDefault(require("supertokens-node/recipe/session"));
const emailpassword_1 = __importDefault(require("supertokens-node/recipe/emailpassword"));
const init = () => supertokens_node_1.default.init({
    framework: "express",
    supertokens: {
        connectionURI: "https://st-dev-47216570-cf48-11ee-9f5e-a9845bd58332.aws.supertokens.io",
        apiKey: "uEb3nxMU61UfKTnzx9GaQumKYG",
    },
    appInfo: {
        appName: "knitly",
        apiDomain: "https://localhost:3000",
        websiteDomain: "https://localhost:5173",
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        emailpassword_1.default.init(), // initializes signin / sign up features
        session_1.default.init(), // initializes session features
    ],
});
exports.default = init;
