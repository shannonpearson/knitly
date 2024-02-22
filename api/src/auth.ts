import supertokens from "supertokens-node";
import type { RecipeInterface } from "supertokens-node/recipe/emailpassword";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";

const signUpOverride = (
	originalImplementation: RecipeInterface
): RecipeInterface => {
	return {
		...originalImplementation,
		signUp: async (input) => {
			let response = await originalImplementation.signUp(input);
			// Post sign up response, we check if it was successful
			if (response.status === "OK" && response.user.loginMethods.length === 1) {
				const { id, emails } = response.user;
			}
			return response;
		},
	};
};
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
			EmailPassword.init({
				override: { functions: signUpOverride },
			}), // initializes signin / sign up features
			Session.init(), // initializes session features
		],
	});

export default init;
