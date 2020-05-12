const { User,validate } = require("../models/users");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let user = await User.findOne({email: req.body.email});
  if(!user){
    return res.status(400).send({success: false, error: "Please login"})
  } else {
    User.find({},(err,data) => {
      if(data){
        res
        .status(200)
        .send({ success: true, message: "Profile Data Success" , profile: {
          email: data[0].email,
          image: data[0].image,
          savedItems: data[0].savedItems
        }});
      }
    })
  }
});

module.exports = router;
