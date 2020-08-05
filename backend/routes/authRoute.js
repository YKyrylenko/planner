const express = require("express");
const router = express.Router();
const upload = require("../configs/multer");
const authController = require("../controllers/authConroller");

router.post("/signup", upload.single("userPhoto"), authController.signup);
router.post("/login", authController.login);

module.exports = router;
