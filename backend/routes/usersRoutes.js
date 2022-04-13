import express from 'express';
import * as userController from '../controllers/usersController.js';
import { verifyToken } from '../middleware/auth/verifyToken.js';
import { isAdmin } from '../middleware/roles/isAdmin.js';

const router = express.Router();

//Verify Token MIddleware
router.get('/', verifyToken, isAdmin, userController.getUsers);
router.get('/:id', verifyToken, isAdmin, userController.getUser);
router.post('/update/:id', verifyToken, isAdmin, userController.updateUser);
router.delete('/:id', verifyToken, isAdmin, userController.deleteUser);

export const usersRoutes = router;
