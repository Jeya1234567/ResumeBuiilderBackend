import {createUser,checkUserExists, logoutUser} from '../models/user.model';
import { User } from '../types/user.types';

export const registerUser = async (user: User) => {
    try{
        const userId = await createUser(user);
        return userId;
    } catch (error) {
        throw new Error('Error registering user');
    }
}

export const CheckUser = async (user:User)  => {
    try{
        const userExists = await checkUserExists(user);
        return userExists;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'Error checking user' );
    }   
}

export const logout = async (userId: string) => {
    try {
        await logoutUser(userId);
    } catch (error) {
        throw new Error('Error logging out user');
    }
}