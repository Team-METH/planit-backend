import { Request, Response } from "express";

const express = require("express");
const app = express();
const serverStartDate = Date.now();
const PORT = 8000;
const connectDB = require("./db/conn");
const logger = require("./utils/logger");
connectDB();
app.get("/health", (req: Request, res: Response) => {
  const healthTimeInSeconds = (Date.now() - serverStartDate) / 1000;

  return res.json({
    message: "Server is up and working",
    data: {
      upTime: healthTimeInSeconds,
    },
  });
});

app.listen(PORT, (error: Error) => {
  if (error) console.error();
  logger.info(`Listening to the port ${PORT}`);
});
