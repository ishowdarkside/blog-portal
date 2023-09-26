import express from "express";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import UserRouter from "./routes/User";
import { errorHandler } from "./controllers/error";
const app = express();
dotenv.config({ path: path.join(__dirname, "config.env") });

app.use(morgan("dev"));
app.use(express.json());

//Routing
app.use("/auth", UserRouter);

app.use("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found!",
  });
});

app.use(errorHandler);
export default app;
