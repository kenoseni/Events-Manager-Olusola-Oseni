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

// Get all users on the platform
router.get(
  '/users',
  middleware.tokenController.confirmToken,
  controller.userController.getAllUsers
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

router.get(
  '/admin/centers',
  // middleware.tokenController.confirmToken,
  controller.centerController.getAllCenters
);
// Get One Event Center
router.get(
  '/centers/:centerId([0-9]+)',
  controller.centerController.getOne
);
// Modify Event Center
router.put(
  '/centers/:centerId([0-9]+)',
  middleware.tokenController.confirmToken,
  middleware.adminValidation,
  middleware.centerValidation.centerInputs,
  controller.centerController.modifyCenter
);
// Delete an Event
router.delete(
  '/centers/:centerId([0-9]+)',
  middleware.tokenController.confirmToken,
  middleware.adminValidation,
  controller.centerController.deleteCenter
);

// create admin route
router.put(
  '/users/:userId([0-9]+)',
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

router.post(
  '/search',
  controller.centerController.searchForCenters
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
  '/events/:eventId([0-9]+)',
  middleware.tokenController.confirmToken,
  controller.eventController.deleteEvent
);
// Modify an Event
router.put(
  '/events/:eventId([0-9]+)',
  middleware.tokenController.confirmToken,
  middleware.eventValidation.eventInputs,
  controller.eventController.modifyEvent
);
// Get an Event
router.get(
  '/events/:eventId([0-9]+)',
  middleware.tokenController.confirmToken,
  controller.eventController.getOneEvent
);
router.get(
  '/events',
  middleware.tokenController.confirmToken,
  controller.eventController.userEvents
);
router.get(
  '*',
  controller.userController.notFound
);
router.post(
  '*',
  controller.userController.notFound
);

export default router;
