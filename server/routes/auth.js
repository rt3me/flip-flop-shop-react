import express from "express";

const router = express.Router();

router.get("/api/register", (req, res) => {
  res.send("You have reached the node server");
});

module.exports = router;
