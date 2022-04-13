import { usersRoutes } from './usersRoutes.js';
import { authRoutes } from './authRoutes.js';
import { tripsRoutes } from './tripsRoutes.js';

export const apiRoutes = (app) => {
  // default route
  app.get('/api', (_, res) => {
    res.send({
      message: 'Hello!',
    });
  });

  app.use('/api/users', usersRoutes);
  app.use('/api/trips', tripsRoutes);
  app.use('/api/auth', authRoutes);
};
