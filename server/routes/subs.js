import express from "express";

const router = express.Router();

import { prices } from "../controllers/auth";

router.get("/prices", prices);

module.exports = router;
