import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";

const init = () =>
	supertokens.init({
		framework: "express",
		supertokens: {
			connectionURI:
				"https://st-dev-47216570-cf48-11ee-9f5e-a9845bd58332.aws.supertokens.io",
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
			EmailPassword.init(), // initializes signin / sign up features
			Session.init(), // initializes session features
		],
	});

export default init;
