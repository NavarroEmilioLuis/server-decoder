import express from 'express';
import { about } from './about.js';
import { leaderboard } from './leaderboard.js';
import { login } from './login.js';
import { play } from './play.js';
import { register } from './register.js';
import { stats } from './stats.js';

import { authMiddleware } from '../middleware/authMiddleware.js';

const routes = express.Router();

// Public routes
routes.use('/about', about);
routes.use('/leaderboard', leaderboard);
routes.use('/login', login);
routes.use('/register', register);

// Private routes
routes.use('/play', authMiddleware);
routes.use('/play', play);
routes.use('/stats', authMiddleware);
routes.use('/stats', stats);

export default routes;
