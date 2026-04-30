 import express from "express";
 import {sendMail} from "../controllers/contactController.js";
 const router = express .Router();
 router.post("/",sendMail);
 export default router;