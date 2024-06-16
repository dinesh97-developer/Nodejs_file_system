import express from 'express';
import Controller from "../controller/index.js"
const router = express.Router();

router.use("/create",Controller.writeFile); // for file creating API Request

export default router;