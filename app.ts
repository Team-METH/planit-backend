import { Request, Response } from "express";

const express = require("express");
const app = express();
const serverStartDate = Date.now();
const PORT = 8000;

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
  console.log(`Listening to the port ${PORT}`);
});
