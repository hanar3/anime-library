import { Router } from "express";
import { container } from "tsyringe";
import multer from "multer";
import multerConfig from "@config/upload";
import UpdateAnimeBannerService from "@modules/Animes/services/UpdateAnimeBannerService";
import AppError from "@shared/Error/AppError";
import { classToClass } from "class-transformer";
const router = Router();
const upload = multer(multerConfig);

router.put("/banner/:animeId", upload.single("banner"), async (req, res) => {
  const { animeId } = req.params;
  const updateBanner = container.resolve(UpdateAnimeBannerService);
  try {
    const anime = await updateBanner.execute({ animeId, file: req.file });
    return res.status(200).json(classToClass(anime));
  } catch(err) {
    if (err instanceof AppError) {
      return res.status(err.code).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Internal server error' })
  }
});

export default router;
