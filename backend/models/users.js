const sequelize = require("./index");

module.exports = sequelize.import("users", (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      email: {
        type: DataTypes.STRING,
        notEmpty: true,
        unique: true,
      },

      password: {
        type: DataTypes.STRING,
        notEmpty: true,
      },

      name: {
        type: DataTypes.STRING,
        notEmpty: true,
      },

      photo: {
        type: DataTypes.STRING,
        notEmpty: true,
      },
    },
    {
      timestamps: false,
    }
  );

  User.getAll = async () => {
    const result = await User.findAll();
    return result.map((item) => item.get());
  };

  User.getUserByEmail = async (email) =>
    await User.findOne({ where: { email } });

  User.getUserById = async (id) => await User.findOne({ where: { id } });

  User.add = async (email, password, name, photo) => {
    await User.create({ email, password, name, photo });
  };
  return User;
});
