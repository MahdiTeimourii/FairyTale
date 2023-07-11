const express = require("express");
const router = express.Router();
const { generateStory } = require("../lib/generateStory.js");

router.post("/generate-story", async (req, res) => {
  try {
    const story = await generateStory(req.body);
    res.json(story);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating story" });
  }
});

module.exports = router;
