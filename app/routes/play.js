import express from 'express';

export const play = express.Router();

play.get('/', (req, res) => {
  res.send('PLAY');
});
