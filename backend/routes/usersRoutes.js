import express from 'express';
import * as userController from '../controllers/usersController.js';
import { verifyToken } from '../middleware/auth/verifyToken.js';

const router = express.Router();

//Verify Token MIddleware
router.get('/', verifyToken, userController.getUsers);
router.get('/:id', verifyToken, userController.getUser);
router.post('/update/:id', verifyToken, userController.updateUser);
router.delete('/:id', verifyToken, userController.deleteUser);

export const usersRoutes = router;
