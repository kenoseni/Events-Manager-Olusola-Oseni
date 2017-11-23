import express from 'express';
import controller from '../controller';
import middleware from '../middleware';

const router = express.Router();
// Register a user on the platform
router.post(
  '/users',
  middleware.userValidation.signupInputs,
  middleware.userValidation.validUserInputs,
  controller.userController.signup
);

// Signin a user on the platform
router.post(
  '/users/login',
  middleware.userValidation.emailExist,
  middleware.userValidation.checkPassWord,
  controller.userController.login
);
// User get all centers
router.get(
  '/centers',
  middleware.tokenController.confirmToken,
  controller.centerController.getCenters
);
// Get One Event Center
router.get(
  '/centers/:centerId',
  controller.centerController.getOne
);

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
  middleware.centerValidation.centerInputs,
  controller.centerController.addCenter
);

// Create Event Center
router.post(
  '/events',
  middleware.tokenController.confirmToken,
  middleware.eventValidation.eventInputs,
  controller.eventController.addEvent
);
// Delete Event Center
router.delete(
  '/events/:eventId',
  middleware.tokenController.confirmToken,
  controller.eventController.deletEvent
);


export default router;
