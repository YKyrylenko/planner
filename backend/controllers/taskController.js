const TaskModel = require("../models/tasks");

const addTask = (req, res) => {
  const { task, date } = req.body;
  const userId = req.user.dataValues.id;
  console.log(userId);
  TaskModel.add(task, date, userId)
    .then((task) => {
      res.statusCode = 201;
      res.send(task);
    })
    .catch((err) => {
      res.statusCode = 409;
      res.send = err;
    });
};

const getTasksOfDay = (req, res) => {
  const { date } = req.query;
  const userId = req.user.dataValues.id;
  TaskModel.getAllTasksOfDay(date, userId).then((tasks) => res.send(tasks));
};

module.exports = {
  addTask,
  getTasksOfDay,
};
