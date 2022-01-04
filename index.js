import dotenv from "dotenv";
dotenv.config();
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import morgan from "morgan";
import router from "./router.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

// DB Setup
mongoose.connect(process.env.MONGO_API);

// App setup
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server setup
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);

console.log("Server is listening on port: ", port);
