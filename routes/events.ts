const eventsController = require("../controllers/events");
const eventsValidator = require("../middlewares/validators/events");

const express = require("express");
const router = express.Router();

router.post("/", eventsValidator.createEvent, eventsController.createEvent);
router.get("/", eventsController.getEvents);
router.patch(
  "/:eventId",
  eventsValidator.updateEvent,
  eventsController.updateEvent
);

module.exports = router;
