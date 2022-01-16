import express from "express";

const router = express.Router();

import { prices, createSubscription } from "../controllers/subs";

router.get("/prices", prices);
router.post("/create-subscription", requireSignin, createSubscription);

module.exports = router;
