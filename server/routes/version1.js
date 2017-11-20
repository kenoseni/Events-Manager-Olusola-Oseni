import express from 'express';
import controller from '../controller';
import auth from '../middleware';

const router = express.Router();
// Register a user on the platform
router.post('/users', controller.userController.signup);
// Signin a user on the platform
router.post('/users/login', controller.userController.login);
router.put('/admins', auth.tokenController.confirmToken, controller.userController.createAdmin);
export default router;
