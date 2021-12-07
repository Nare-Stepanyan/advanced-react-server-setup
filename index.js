import express from "express";
import http from "http";
import bodyParser from "body-parser";
import morgan from "morgan";
import router from "./router.js";

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);

console.log("Server is listening on port: ", port);
