const path = require("path");
const fs = require("fs");

import getConfig from "next/config";

const multer = require("multer");
const { v4: uuid } = require("uuid");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

export const fileUpKesans = multer({
  limits: { fileSize: 2048576 },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        path.join(
          getConfig().serverRuntimeConfig.PROJECT_ROOT,
          "/public/kesans"
        )
      );
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuid() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error("Invalid file type!");
    cb(error, isValid);
  },
});

export const fileUpBerita = multer({
  limits: { fileSize: 2048576 },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      console.error("dest");
      cb(
        null,
        path.join(
          getConfig().serverRuntimeConfig.PROJECT_ROOT,
          "/public/berita"
        )
      );
    },
    filename: (req, file, cb) => {
      console.error("filename");
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuid() + "." + ext);
    },
  }),
  // fileFilter: (req, file, cb) => {
  //   console.error("filter"+getConfig().serverRuntimeConfig.PROJECT_ROOT);
  //   const isValid = !!MIME_TYPE_MAP[file.mimetype];
  //   let error = isValid ? null : new Error("Invalid file type!");
  //   cb(error, isValid);
  // },
});

export const fileUpTim = multer({
  limits: { fileSize: 2048576 },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        path.join(
          getConfig().serverRuntimeConfig.PROJECT_ROOT,
          "/public/tim"
        )
      );
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuid() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error("Invalid file type!");
    cb(error, isValid);
  },
});

export const fileUpDonasi = multer({
  limits: { fileSize: 2048576 },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        path.join(
          getConfig().serverRuntimeConfig.PROJECT_ROOT,
          "/public/donasi"
        )
      );
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuid() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error("Invalid file type!");
    cb(error, isValid);
  },
});

export const fileUpUser = multer({
  limits: { fileSize: 2048576 },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        path.join(getConfig().serverRuntimeConfig.PROJECT_ROOT, "/public/user")
      );
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuid() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error("Invalid file type!");
    cb(error, isValid);
  },
});

export const fileUpOrang = multer({
  limits: { fileSize: 2048576 },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        path.join(getConfig().serverRuntimeConfig.PROJECT_ROOT, "/public/orang")
      );
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuid() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error("Invalid file type!");
    cb(error, isValid);
  },
});

export const fileUpKata = multer({
  limits: { fileSize: 2048576 },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        path.join(
          getConfig().serverRuntimeConfig.PROJECT_ROOT,
          "/public/kata"
        )
      );
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuid() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error("Invalid file type!");
    cb(error, isValid);
  },
});

export const fileUpBanner = (id) => multer({
  limits: { fileSize: 3068576 },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        path.join(getConfig().serverRuntimeConfig.PROJECT_ROOT, "/public/bg")
      );
    },
    filename: (req, file, cb) => {
      cb(null, id+".jpeg");
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error("Invalid file type!");
    cb(error, isValid);
  },
});

export const removeImage = (img, dir) => {
  if (img) {
    let filePath = img.path;
    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => console.log("menghapus upload", err));
    } else {
      filePath = path.join(
        getConfig().serverRuntimeConfig.PROJECT_ROOT,
        "/public/"+dir,
        img
      );
      fs.unlink(filePath, (err) => console.log("menghapus foto lama", err));
    }
  }
};

export const fileUpSoal = multer({
  limits: { fileSize: 2048576 },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        path.join(
          getConfig().serverRuntimeConfig.PROJECT_ROOT,
          "/public/soal"
        )
      );
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuid() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error("Invalid file type!");
    cb(error, isValid);
  },
});

