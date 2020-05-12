const { User } = require("../models/users");
const express = require("express");
const router = express.Router();

router.get("/:email", async (req, res) => {
  let user = await User.findOne({ email: req.params.email });
  if (!user) {
    return res
      .status(400)
      .send({ success: false, error: "User does not exist" });
  } else {
    User.find({ email: req.params.email },
        (err,data) => {
        if(data){
          res
          .status(200)
          .send({ success: true,data:data[0].savedItems});
        }
      })
  }
});

module.exports = router;
