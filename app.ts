import { NextFunction, Request, Response } from "express";
import { CustomResponse } from "./types/common";

const express = require("express");
const boom = require("express-boom");
const app = express();
const serverStartDate = Date.now();
const PORT = 8000;
const connectDB = require("./db/conn");
const logger = require("./utils/logger");
connectDB();

app.use(boom());

app.get("/health", (req: Request, res: Response) => {
  const healthTimeInSeconds = (Date.now() - serverStartDate) / 1000;

  return res.json({
    message: "Server is up and working",
    data: {
      upTime: healthTimeInSeconds,
    },
  });
});

// for not found pages - 404 error page
app.use(function (req: Request, res: CustomResponse) {
  res.boom.notFound();
});

app.listen(PORT, (error: Error) => {
  if (error) console.error();
  logger.info(`Listening to the port ${PORT}`);
});
