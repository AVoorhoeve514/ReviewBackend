import express from 'express';
import { getAllReviews } from '../controllers/reviewsController.js';
import cors from 'cors';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/reviews', cors(), getAllReviews);

export default router;
