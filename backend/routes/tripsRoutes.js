import express from 'express';
import * as tripController from '../controllers/office/tripController.js';
import { verifyToken } from '../middleware/auth/verifyToken.js';
import { isOffice } from '../middleware/roles/isOffice.js';

const router = express.Router();

//Admin Routes
// router.get('/', verifyToken, isOffice, tripController.getTrips);
router.post('/add', verifyToken, isOffice, tripController.storeTrip);
// router.get('/:id', verifyToken, isOffice, tripController.getTrip);
// router.post('/update/:id', verifyToken, isOffice, tripController.updateTrip);
// router.delete('/:id', verifyToken, isOffice, tripController.deleteTrip);

//User Routes

export const tripsRoutes = router;
