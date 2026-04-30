 import express from "express";
import { sendMail } from "../controllers/contactController.js";

const router = express.Router();

router.options("/", (req, res) => {
  res.sendStatus(200);
});

router.post("/", sendMail);

export default router;