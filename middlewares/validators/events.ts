import { NextFunction, Request } from "express";
import { CustomResponse } from "../../types/common";
const joi = require("joi");
const logger = require("../../utils/logger");

const createEvent = async (
  req: Request,
  res: CustomResponse,
  next: NextFunction
) => {
  ////will take from context being created in backend, not sent from client
  // const {name, startedDateTime, endDateTime, venueId, hostId} = req.body;
  const schema = joi.object({
    name: joi.string().required(),
    startedDateTime: joi.string().required(),
    endDateTime: joi.string().required(),
    venueId: joi.string().required(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error: any) {
    logger.error(`Error creating event: ${error}`);
    res.boom.badRequest(error.details[0].message);
  }
};
module.exports = { createEvent };
