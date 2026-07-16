import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";

import userRouter from "./routes/user.route.js";
import messageRouter from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.CLIENT_URL
    ],
    credentials: true,
  })
);


app.use("/api/user", userRouter);
app.use("/api/messages", messageRouter);


server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
