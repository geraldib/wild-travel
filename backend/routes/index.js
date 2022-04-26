import { agenciesRoutes } from './agenciesRoutes.js';
import { authRoutes } from './authRoutes.js';
import { tripsRoutes } from './tripsRoutes.js';

export const apiRoutes = (app) => {
  // default route
  app.get('/api', (_, res) => {
    res.send({
      message: 'Hello!',
    });
  });

  app.use('/api/agencies', agenciesRoutes);
  app.use('/api/trips', tripsRoutes);
  app.use('/api/auth', authRoutes);
};
