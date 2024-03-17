import type { User } from "@prisma/client";

export type MinimalUserCreate = Pick<User, "supertokensId" | "email"> &
	Partial<User>;

export type MinimalUserUpdate = Pick<User, "id"> & Partial<User>;
