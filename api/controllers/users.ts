import type { User } from "@prisma/client";
import type { MinimalUserUpdate } from "../types/User";
import { getOne, updateOne, verifySameUser } from "../services/users";

const getByAuthId = async (superokensId: string): Promise<User> => {
	return await getOne(superokensId);
};

const update = async (
	sessionAuthId: string,
	userParams: MinimalUserUpdate
): Promise<User> => {
	const { id, ...rest } = userParams;
	await verifySameUser(id, sessionAuthId);
	return await updateOne(id, rest);
};

export { getByAuthId, update };
