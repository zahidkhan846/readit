import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { trim } from "./middleware/trim";
// Routes
import authRoutes from "./routes/auth";
import postRoutes from "./routes/post";
import subRoutes from "./routes/sub";
import miscRoutes from "./routes/misc";

dotenv.config();

const app = express();

const options = {
  credentials: true,
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(morgan("dev"));
app.use(trim);
app.use(cookieParser());
app.use(cors(options));

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/sub", subRoutes);
app.use("/api/misc", miscRoutes);

app.listen(process.env.PORT, async () => {
  console.log("Server running on:" + process.env.PORT);
  try {
    await createConnection();
    console.log("DB Connected!");
  } catch (error) {
    console.log(error);
  }
});
