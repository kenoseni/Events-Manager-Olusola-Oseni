import express from 'express';
import controller from '../controller';

const router = express.Router();
// Register a user on the platform
router.post('/users', controller.userController.signup);
export default router;
