import express from 'express';
import * as agenciesController from '../controllers/admin/agenciesController.js';
import { verifyToken } from '../middleware/auth/verifyToken.js';
import { isAdmin } from '../middleware/roles/isAdmin.js';

const router = express.Router();

//Admin Routes
router.get('/', verifyToken, isAdmin, agenciesController.getAgencies);
router.get('/:id', verifyToken, isAdmin, agenciesController.getAgency);
router.post('/update/:id', verifyToken, isAdmin, agenciesController.updateAgency);
router.delete('/:id', verifyToken, isAdmin, agenciesController.deleteAgency);

//User Routes

export const agenciesRoutes = router;
