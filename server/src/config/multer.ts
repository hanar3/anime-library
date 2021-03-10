import crypto from 'crypto';
import multer from "multer";
import path from 'path';

export default {
  storage: multer.diskStorage({ 
    destination: function(req, file, cb) {
      cb(null, path.resolve(__dirname, '..', 'tmp'));
    },
    filename: function(req, file, cb) {
      cb(null, crypto.randomBytes(10).toString('hex') + '-' + file.originalname);
    }
  })
}