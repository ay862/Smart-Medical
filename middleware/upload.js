const express = require("express");
const multer = require("multer");
const fs = require("fs");

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret:process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
      folder: 'CloudinaryDemo',
      allowedFormats: ['jpeg', 'png', 'jpg'],
  }
});

module.exports = {
  storage
};


//const upload = multer({ storage });

// constant
/*const app = express();
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const dir = "uploads/";
    !fs.existsSync(dir) && fs.mkdirSync(dir);
    callback(null, "uploads/");
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let ext = file.originalname.lastIndexOf(".");
    ext = file.originalname.substring(ext + 1);
    callback(null, `${file.fieldname}-${uniqueSuffix}.${ext}`);
  },
});*/
module.exports = {
  storage
};