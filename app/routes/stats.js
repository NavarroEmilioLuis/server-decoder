import express from 'express';

export const stats = express.Router();

stats.get('/', (req, res) => {
  res.send('STATS');
});
