import { Router } from 'express';
import animeRoutes from '@modules/Animes/infra/http/routes';


const router = Router();

router.use('/animes', animeRoutes);

export default router;