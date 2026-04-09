import * as userController from '../controllers/user.controller';
import { Router } from 'express';

const router = Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.checkUser);
router.post('/logout', userController.logout);
router.get('/check', userController.checkAuthentication);

export default router;