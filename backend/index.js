const express = require("express");
const app = express();

require("./configs/passport");
require("./middlewares")(app);
require("./routes")(app);

app.get("/", (req, res) => {
  res.send({
    hello: "world",
  });
});

app.listen(8080);
