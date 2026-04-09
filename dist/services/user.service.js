"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckUser = exports.registerUser = void 0;
const user_model_1 = require("../models/user.model");
const registerUser = async (user) => {
    try {
        const userId = await (0, user_model_1.createUser)(user);
        return userId;
    }
    catch (error) {
        throw new Error('Error registering user');
    }
};
exports.registerUser = registerUser;
const CheckUser = async (user) => {
    try {
        const userExists = await (0, user_model_1.checkUserExists)(user);
        return userExists;
    }
    catch (error) {
        throw new Error('Error checking user');
    }
};
exports.CheckUser = CheckUser;
//# sourceMappingURL=user.service.js.map