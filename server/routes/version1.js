import express from 'express';
import controller from '../controller';

const router = express.Router();
// Register a user on the platform
router.post('/users', controller.userController.signup);
// Signin a user on the platform
router.post('/users/login', controller.userController.login);
export default router;
