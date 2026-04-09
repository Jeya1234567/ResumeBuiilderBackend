"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserExists = exports.createUser = void 0;
const db_1 = __importDefault(require("../config/db"));
const createUser = async (user) => {
    const result = await db_1.default.execute('INSERT INTO users (email, password) VALUES (?, ?)', [user.email, user.password]);
    return result[0].insertId;
};
exports.createUser = createUser;
const checkUserExists = async (user) => {
    const result = await db_1.default.execute('SELECT * FROM tbluser Where email =? AND password = ?', [user.email, user.password]);
    if (result[0].length > 0) {
        return true;
    }
    else {
        return false;
    }
};
exports.checkUserExists = checkUserExists;
//# sourceMappingURL=user.model.js.map