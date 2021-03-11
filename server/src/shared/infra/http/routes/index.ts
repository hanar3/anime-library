import { Router } from 'express';
import animeRoutes from './animes.routes'

const router = Router();

router.use('/animes', animeRoutes);

export default router;