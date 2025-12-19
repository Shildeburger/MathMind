import express from 'express';

const gamemods = [
  { key: 'classic', name: 'Classic', description: 'classic' },
  { key: 'timed', name: 'Timed', description: 'timed' },
  { key: 'challenge', name: 'Challenge', description: 'challenge' },
];
const expressApp = express();
expressApp.get('/ping', (req, res) => {
  res.send('pong');
});
expressApp.get('/gamemods', (req, res) => {
  res.send(gamemods);
});
expressApp.listen(3000, () => {
  console.info('Listening at http://localhost:3000');
});
