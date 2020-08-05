const express = require("express");
const passport = require("passport");

const router = express.Router();
const taskController = require("../controllers/taskController");

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  taskController.addTask
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  taskController.getTasksOfDay
);

module.exports = router;
