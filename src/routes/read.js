import express from 'express';
import Read from "../controller/readDir.js"
const router = express.Router();

router.use("/read",Read.readDir); // for file name retrivel API Request

export default router;