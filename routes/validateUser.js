const { User, validate } = require("../models/users");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  // finding the user with email address
  let user = await User.findOne({email: req.body.email});
  if(!user){
      return res.status(400).send({success: false, error: "User does not exist. Please register"})
  } else {
    res.status(200).send({ success: true ,message: 'User Exists'});
  }
});

module.exports = router;
