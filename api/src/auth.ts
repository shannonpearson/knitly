import supertokens from "supertokens-node";
import type { RecipeInterface } from "supertokens-node/recipe/emailpassword";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import { createOne, updateOne } from "../services/users";

const signUpOverrideFunctions = (
	originalImplementation: RecipeInterface
): RecipeInterface => {
	return {
		...originalImplementation,
		signUp: async (input) => {
			let response = await originalImplementation.signUp(input);

			if (response.status === "OK" && response.user.loginMethods.length === 1) {
				const { id, emails } = response.user;
				const userData = {
					supertokensId: id,
					email: emails[0],
				};
				const createdUser = await createOne(userData);
				return { ...response, createdUser };
			}
			return response;
		},
		signIn: async (input) => {
			let response = await originalImplementation.signIn(input);

			if (response.status === "OK") {
				const email = response.user.emails[0];
				const updatedUser = await updateOne(email, { lastLogin: new Date() });
				return { ...response, updatedUser };
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
			apiDomain: "http://localhost:3000",
			websiteDomain: "http://localhost:5173",
			apiBasePath: "/auth",
			websiteBasePath: "/auth",
		},
		recipeList: [
			EmailPassword.init({
				override: {
					functions: signUpOverrideFunctions,
				},
			}), // initializes signin / sign up features
			Session.init({
				cookieDomain: "localhost",
			}), // initializes session features
		],
	});

export default init;
