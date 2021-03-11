import { Router } from "express";
import { getRepository } from "typeorm";
import multer from "multer";
import fs from 'fs';
import path from 'path';
import Anime from "@modules/Animes/infra/typeorm/entities/Anime";
import multerConfig from "@config/multer";

const router = Router();
const upload = multer(multerConfig);

router.put("/banner/:animeId", upload.single("banner"), async (req, res) => {
  const { animeId } = req.params;
  const animesRepository = getRepository(Anime);

  const anime = await animesRepository.findOne(animeId);
  if (!anime) return res.status(404).json({ message: "Not found" });
 
  if (req.file) {
    if (anime.banner) {
      const filePath =path.resolve(__dirname, '..', 'tmp', anime.banner);
      // Delete previous banner...
      fs.stat(filePath, (err, stats) => {
        if (stats && stats.isFile()) {
          fs.unlink(filePath, (err) => {
            if (err) {
              console.log('Error deleting file:'+ anime.banner);
            }
          });
        }
      });
    }

    anime.banner = req.file.filename;
    await animesRepository.save(anime);
    return res.json({ anime: req.file.filename });
  }
});

export default router;
