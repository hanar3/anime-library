import crypto from 'crypto';
import multer from "multer";
import path from 'path';

export const tmpFolderPath = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  storage: multer.diskStorage({ 
    destination: function(req, file, cb) {
      cb(null, tmpFolderPath);
    },
    filename: function(req, file, cb) {
      cb(null, crypto.randomBytes(10).toString('hex') + '-' + file.originalname);
    }
  })
}