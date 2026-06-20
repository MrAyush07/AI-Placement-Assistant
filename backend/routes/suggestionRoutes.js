const express = require("express");

const router =
  express.Router();

const {
  generateSuggestions
} = require(
  "../controllers/suggestionController"
);

router.post(
  "/generate",
  generateSuggestions
);

module.exports = router;