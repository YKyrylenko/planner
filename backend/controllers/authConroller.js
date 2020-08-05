const passport = require("passport");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/users");
const bcrypt = require("bcryptjs");

const signup = async (req, res, next) => {
  console.log(UserModel);
  const { name, email, password } = JSON.parse(req.body.userData);
  const photo = `http://192.168.31.146:8080/static/uploads/${req.file.filename}`;
  const salt = await bcrypt.genSalt(10);
  const userPassword = await bcrypt.hash(password, salt);
  UserModel.add(email, userPassword, name, photo)
    .then((result) => {
      res.statusCode = 200;
      res.send("registred");
    })
    .catch((err) => {
      res.statusCode = 409;
      res.send(`email ${err.fields.email} is already exist`);
    });
};

const login = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      // res.send(err.message);
      return res.status(400).json({
        message: info.message || err,
        user: user,
      });
    }
    req.logIn(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      const token = jwt.sign(user.id, "jwtsecret");

      return res.status(200).json({
        token: token,
        user: {
          id: user.id,
          name: user.name,
          photo: user.photo,
        },
      });
    });
  })(req, res);
};

module.exports = {
  signup,
  login,
};
