const sequelize = require("./index");
const User = require("./users");

const { Op } = require("sequelize");

module.exports = sequelize.import("tasks", (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "tasks",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      text: {
        type: DataTypes.STRING,
        notEmpty: true,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        notEmpty: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        notEmpty: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Task.belongsTo(User, { allowNull: false });

  // Task.sync({ force: true });
  Task.add = async (task, date, userId) => {
    const result = await Task.create({ text: task, date, userId });
    return await { id: result.id, text: result.text };
  };

  Task.getAllTasksOfDay = async (date, userId) => {
    return await Task.findAll({
      attributes: ["id", "text"],
      where: { [Op.and]: [{ date }, { userId }] },
    });
  };

  return Task;
});
