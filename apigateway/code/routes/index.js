import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
const router = express.Router();

// create a proxy for each microservice
const reviewProxy = createProxyMiddleware({
  target: 'http://reviews:3010',
  changeOrigin: true,
});

router.use('/reviews', cors(), reviewProxy);

export default router;
