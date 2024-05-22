const eventsController = require("../controllers/events");
const eventsValidator = require("../middlewares/validators/events");

const express = require("express");
const router = express.Router();

router.post("/", eventsValidator.createEvent, eventsController.createEvent);

module.exports = router;
