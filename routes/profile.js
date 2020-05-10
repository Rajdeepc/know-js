const { User } = require("../models/users");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  // validating the request
  const error = validate(req.body);
  if (error) {
    return res.status(400).send({ error: error });
  }
  userProfile = new User({
    image: req.body.image,
    email: req.body.email,
    lovedItems: req.body.lovedItems
  });
  await user.save();
  res.status(200).send({ userProfileData: userProfile, success: true });
});

module.exports = router;
