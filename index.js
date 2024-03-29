import express from 'express';
import routes from './app/routes/index.js';
import { validateConstants } from './app/constants/validateConstants.js';
import { createTables } from './app/database/createTables.js';
import { db, closeConnection } from './app/database/index.js';

// Make sure the constants are OK
validateConstants();

// Ensure database tables exist
await createTables(db);

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
  res.status(400).send(err.message);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

process.on('SIGINT', async function () {
  closeConnection();
});
