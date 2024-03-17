import express from "express";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import { SessionRequest } from "supertokens-node/framework/express";
import { getByAuthId, update } from "../controllers/users";

const router = express.Router();

router.get(
	"/users/:authId",
	verifySession(),
	async function (req: SessionRequest, res) {
		console.log("ROUTER GET");
		const sessionSupertokensId = req.session!.getUserId();
		const { authId } = req.params;
		if (sessionSupertokensId !== authId) {
			res.status(401).send("Requested user is not authenticated");
		}
		const user = await getByAuthId(authId);
		console.log("USER BY ID", user);
		res.status(200).send(user);
	}
);

router.put(
	"/users/:id",
	verifySession(),
	async function (req: SessionRequest, res) {
		const sessionSupertokensId = req.session!.getUserId();
		const updatedUser = await update(sessionSupertokensId, req.body);

		res.status(200).send(updatedUser);
	}
);

export default router;
