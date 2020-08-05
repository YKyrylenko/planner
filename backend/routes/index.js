const authRoute = require("./authRoute");
const taskRoute = require("./taskRoute");

module.exports = (app) => {
  app.use("/auth", authRoute);
  app.use("/tasks", taskRoute);
};
