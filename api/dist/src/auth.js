"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertokens_node_1 = __importDefault(require("supertokens-node"));
const session_1 = __importDefault(require("supertokens-node/recipe/session"));
const emailpassword_1 = __importDefault(require("supertokens-node/recipe/emailpassword"));
const user_1 = require("../services/user");
const signUpOverride = (originalImplementation) => {
    return {
        ...originalImplementation,
        signUp: async (input) => {
            let response = await originalImplementation.signUp(input);
            // Post sign up response, we check if it was successful
            if (response.status === "OK" && response.user.loginMethods.length === 1) {
                const { id, emails } = response.user;
                const userData = {
                    supertokensId: id,
                    email: emails[0],
                };
                const createdUser = await (0, user_1.create)(userData);
                return { ...response, createdUser };
            }
            return response;
        },
    };
};
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
        emailpassword_1.default.init({
            override: { functions: signUpOverride },
        }), // initializes signin / sign up features
        session_1.default.init(), // initializes session features
    ],
});
exports.default = init;
