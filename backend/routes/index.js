import { usersRoutes } from './usersRoutes.js';
import { authRoutes } from './authRoutes.js';

export const apiRoutes = (app) => {
  // default route
  app.get('/api', (_, res) => {
    res.send({
      message: 'Hello!',
    });
  });

  // users routes
  app.use('/api/users', usersRoutes);
  app.use('/api/auth', authRoutes);
};
