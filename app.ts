import { NextFunction, Request, Response } from "express";
import { CustomResponse } from "./types/common";

const express = require("express");
const boom = require("express-boom");
const app = express();
const serverStartDate = Date.now();
const PORT = 8000;
const connectDB = require("./db/conn");
const logger = require("./utils/logger");
const auth = require("./routes/auth")
connectDB();

app.use(boom());

app.get("/privacy", (req: Request, res: Response) => {
  return res.json({message : "privacy page"})
})

app.get("/tos", (req: Request, res: Response) => {
  return res.json({message : "tos page"})
})

app.get("/health", (req: Request, res: Response) => {
  const healthTimeInSeconds = (Date.now() - serverStartDate) / 1000;

  return res.json({
    message: "Server is up and working",
    data: {
      upTime: healthTimeInSeconds,
    },
  });
});

app.use(auth);

// for not found pages - 404 error page
app.use(function (req: Request, res: CustomResponse) {
  res.boom.notFound();
});


app.listen(PORT, (error: Error) => {
  if (error) console.error();
  logger.info(`Listening to the port ${PORT}`);
});