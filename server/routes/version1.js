import express from 'express';
import controller from '../controller';
import middleware from '../middleware';

const router = express.Router();
// Register a user on the platform
router.post(
  '/users',
  middleware.userValidation.signupInputs,
  middleware.userValidation.validUserInputs,
  middleware.userValidation.emailExist,
  controller.userController.signup
);

// Signin a user on the platform
router.post(
  '/users/login',
  middleware.userValidation.checkEmail,
  middleware.userValidation.checkPassWord,
  controller.userController.login
);
// User get all centers
router.get(
  '/centers',
  // middleware.tokenController.confirmToken,
  controller.centerController.getCenters
);
// Get One Event Center
router.get(
  '/centers/:centerId',
  controller.centerController.getOne
);
// Modify Event Center
router.put(
  '/centers/:centerId',
  middleware.tokenController.confirmToken,
  middleware.adminValidation,
  middleware.centerValidation.centerInputs,
  controller.centerController.modifyCenter
);
// Delete an Event
router.delete(
  '/centers/:centerId',
  middleware.tokenController.confirmToken,
  middleware.adminValidation,
  controller.centerController.deleteCenter
);

// create admin route
router.put(
  '/users/:userId',
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

// Create an Event
router.post(
  '/events',
  middleware.tokenController.confirmToken,
  middleware.eventValidation.eventInputs,
  controller.eventController.addEvent
);
// Delete an Event
router.delete(
  '/events/:eventId',
  middleware.tokenController.confirmToken,
  controller.eventController.deleteEvent
);
// Modify an Event
router.put(
  '/events/:eventId',
  middleware.tokenController.confirmToken,
  middleware.eventValidation.eventInputs,
  controller.eventController.modifyEvent
);
// Get an Event
router.get(
  '/events/:eventId',
  middleware.tokenController.confirmToken,
  controller.eventController.getOneEvent
);
router.get(
  '/events',
  middleware.tokenController.confirmToken,
  controller.eventController.userEvents
);

export default router;
