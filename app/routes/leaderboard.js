import express from 'express';

export const leaderboard = express.Router();

leaderboard.get('/', (req, res) => {
  res.send('LEADERBOARD');
});
