import type { User } from "@prisma/client";
import client from "./db/client";

type MinimalUserCreate = Pick<User, "supertokensId" | "email"> & Partial<User>;

const createOne = async (user: MinimalUserCreate): Promise<User> => {
	return await client.user.create({ data: user });
};

const updateOne = async (email: string, user: Partial<User>): Promise<User> => {
	const result = await client.user.update({
		where: { email },
		data: user,
	});
	return result;
};

export { createOne, updateOne };
