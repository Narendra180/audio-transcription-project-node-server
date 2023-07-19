const express = require("express");
const router = express.Router();

const {
  uploadAudioOrVideoFile
} = require("../controllers/upload-controller");

router.route("/").post(uploadAudioOrVideoFile);

module.exports = router;