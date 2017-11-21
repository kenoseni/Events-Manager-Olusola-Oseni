import express from 'express';
import controller from '../controller';
import middleware from '../middleware';

const router = express.Router();
// Register a user on the platform
router.post('/users', controller.userController.signup);
// Signin a user on the platform
router.post('/users/login', controller.userController.login);
// create admin route
router.put(
  '/admins',
  middleware.tokenController.confirmToken,
  controller.userController.createAdmin
);

// Admin create a center
router.post(
  '/centers',
  middleware.tokenController.confirmToken,
  middleware.adminValidation,
  controller.centerController.addCenter
);
export default router;
