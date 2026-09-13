import express from 'express';
import countryRoutes from './routes/countryRoutes.js';

const app = express();

// Inject the PORT variable from the deployment environment or default to 3000 (for local development).
const PORT = process.env.PORT || 3000;

app.use('/', countryRoutes);

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});