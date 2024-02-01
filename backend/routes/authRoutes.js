import express from 'express';
const router = express.Router();
import { isAuthenticatedUser } from '../middleware/auth.js';
import { registerNewUser, loginUser, logoutUser } from '../controllers/authController.js';

router.route('/auth/register').post(isAuthenticatedUser, registerNewUser);
router.route('/auth/login').post(loginUser);
router.route('/auth/logout').post(logoutUser);

export default router;