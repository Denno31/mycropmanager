const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { User } = require("../models/useModel.js");
const { generateToken } = require("../utils/utils.js");
const router = express.Router();

router.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.send({
        _id: user._id,
        name: user.name,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

module.exports = router;
