const { User } = require("../models/users");
const express = require("express");
const router = express.Router();

router.put("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user && !videoId) {
    return res
      .status(400)
      .send({ success: false, error: "User does not exist" });
  } else {
    User.findOneAndUpdate(
      {
        email: req.body.email,
        "savedItems": {$nin:[req.body.videoId]}
      },
      
      {
        $push: {
          "savedItems": req.body.videoId
        }
      },
      {new: true},
      (err, data) => {
        if (err) {
          res.status(400).send({ success: false, message: err });
        } else {
          User.find({},(err,data) => {
            if(data){
              res
              .status(200)
              .send({ success: true, message: "Video Item Saved Successfully" ,data:data[0].savedItems});
            }
          })
          
        }
      }
    );
  }
});

module.exports = router;
