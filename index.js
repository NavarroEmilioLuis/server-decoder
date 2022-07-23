import express from 'express';
import routes from './app/routes/index.js';
import { validateConstants } from './app/constants/validateConstants.js';

// Make sure the constants are OK
validateConstants();

// Init the app
const app = express();
const port = 3000;
app.use(express.json());

// Index route
app.get('/', (req, res) => {
  res.send('DECODER');
});

// Mount all routes
app.use('/', routes);

// Don't allow any other routes
app.get('*', (req, res) => {
  res.status(404).end();
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.message);
  res.json({ error: true, err: err.message });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
