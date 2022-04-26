import express from 'express';
import * as tripController from '../controllers/agency/tripController.js';
import { verifyToken } from '../middleware/auth/verifyToken.js';
import { isAgency } from '../middleware/roles/isAgency.js';

const router = express.Router();

//Admin Routes
router.get('/', verifyToken, isAgency, tripController.getTrips);
router.post('/add', verifyToken, isAgency, tripController.storeTrip);
router.get('/:id', verifyToken, isAgency, tripController.getTrip);
router.post('/update/:id', verifyToken, isAgency, tripController.updateTrip);
router.delete('/:id', verifyToken, isAgency, tripController.deleteTrip);

//User Routes

export const tripsRoutes = router;
