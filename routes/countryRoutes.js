import express from 'express';
import { findShortestPath } from '../services/pathfinder.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send("Welcome to the C.H. Robinson Country Route API! Please append a 3-letter North American country code to the URL (e.g., /PAN or /BLZ).");
});

router.get('/:countryCode', (req, res) => {
  const code = req.params.countryCode.toUpperCase();
  const path = findShortestPath(code);

  if (!path) {
    return res.status(404).json({ error: "Invalid country code." });
  }

  res.json({
    destination: code,
    list: path
  });
});

export default router;