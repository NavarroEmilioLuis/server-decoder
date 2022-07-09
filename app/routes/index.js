import express from 'express';
import { about } from './about.js';
import { leaderboard } from './leaderboard.js';
import { play } from './play.js';
import { stats } from './stats.js';

const routes = express.Router();

routes.use('/about', about);
routes.use('/leaderboard', leaderboard);
routes.use('/play', play);
routes.use('/stats', stats);

export default routes;
