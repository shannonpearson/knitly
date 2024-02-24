"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const client_1 = __importDefault(require("./db/client"));
const create = async (user) => {
    const result = await client_1.default.user.create({ data: user });
    console.log(result);
    return result;
};
exports.create = create;
