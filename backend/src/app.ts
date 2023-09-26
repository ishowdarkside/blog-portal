import express from "express";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
const app = express();
dotenv.config({ path: path.join(__dirname, "config.env") });

app.use(morgan("dev"));

export default app;
