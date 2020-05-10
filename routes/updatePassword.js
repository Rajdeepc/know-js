const { User, validate } = require("../models/users");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
  // check if user already exist or not
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res
      .status(200)
      .send({ success: false, error: "User does not exist" });
  } else {
    const salt = await bcrypt.genSalt(10); // generating a salt
    const updatedPassword = await bcrypt.hash(user.password, salt);// encrypting user password before saving it to db
    User.findOneAndUpdate(
      {
        email: req.body.email,
      },
      {
        $set: {
          password: updatedPassword
        },
      },
      (err, data) => {
        if (err) {
          res.status(400).send({ success: false ,message: err});
        } else {
          res.status(200).send({ success: true ,message: 'Password Updated Successfully'});
        }
      }
    );
    
  }
});

module.exports = router;
