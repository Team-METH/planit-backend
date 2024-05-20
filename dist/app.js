"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const serverStartDate = Date.now();
const PORT = 8000;
app.get("/health", (req, res) => {
    const healthTimeInSeconds = (Date.now() - serverStartDate) / 1000;
    return res.json({
        message: "Server is working properly",
        data: {
            upTime: healthTimeInSeconds,
        },
    });
});
app.listen(PORT, (error) => {
    if (error)
        console.error();
    console.log(`Listening to the port ${PORT}`);
});
