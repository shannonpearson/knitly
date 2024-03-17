import client from "./db/client";
import type { User } from "@prisma/client";
import type { MinimalUserCreate } from "../types/User";

const getOne = async (supertokensId: string): Promise<User> => {
	return await client.user.findUniqueOrThrow({ where: { supertokensId } });
};

const createOne = async (user: MinimalUserCreate): Promise<User> => {
	return await client.user.create({ data: user });
};

const updateOne = async (id: string, user: Partial<User>): Promise<User> => {
	return await client.user.update({
		where: { id },
		data: user,
	});
};

const verifySameUser = async (id: string, authId: string): Promise<User> => {
	return await client.user.findFirstOrThrow({
		where: {
			AND: {
				id: id,
				supertokensId: authId,
			},
		},
	});
};

export { getOne, createOne, updateOne, verifySameUser };
