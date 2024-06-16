import express from "express";
import IndexRouter from "./src/routes/index.js"
import ReadRouter from "./src/routes/read.js"
const app = express();


//Port environtment for users
const port = process.env.PORT || 9000;

app.get("/create",IndexRouter); // for file creating API Request
app.get("/read",ReadRouter); // for file name retrivel API Request

app.listen(port, () => console.log("Server run in http://localhost:9000"))