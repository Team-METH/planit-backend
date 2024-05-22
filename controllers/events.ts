import { Request, Response } from "express";
import { CustomResponse } from "../types/common";
const logger = require("../utils/logger");
const Event = require("../db/models/events");
const createEvent = async (req: Request, res: CustomResponse) => {
  const { name, startedDateTime, endDateTime, venueId, hostId } = req.body;

  try {
    const event = new Event({
      name,
      startedDateTime,
      endDateTime,
      venueId,
      hostId,
    });

    await event.save();

    return res.json({
      message: "Events created successfully",
      data: event,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Couldn't create event. Please try again later",
      error: error.message,
    });
    logger.error(error.message);
  }
};
module.exports = { createEvent };
