import { Router } from 'express';
import multer from 'multer';

const router = Router();
const upload = multer();

router.put('/banner/:animeId', upload.single('banner'), async (req, res) => {
  if(req.file) {
    console.log(req.file.originalname);
  }
  return res.json({ ok: true });
});

export default router;