const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  analyzeResume
} = require("../controllers/atsController");

router.post(
  "/analyze",
  upload.single("resume"),
  analyzeResume
);

module.exports = router;