const express = require("express");
const { RegModel } = require("../Models/UserReigtration");
const bcrypt = require("bcrypt");
require("dotenv").config();
const saltRounds = process.env.saltRounds;
const jwt = require("jsonwebtoken");

const userRoutes = express.Router();


// user registration

userRoutes.post("/register", async (req, res) => {
  console.log(req)
  const password = req.body.password;
  try {
    // cheking user exist or not
    const isExist = await RegModel.findOne({ email: req.body.email });
    if (!isExist) {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (hash) {
          //  storing data in DB
          const user = new RegModel({ ...req.body, password: hash });
          await user.save();
          res.status(200).send({ msg: "Registration successfull" });
        } else {
          res.status(201).send(err);
        }
      });
    } else {
      res.status(200).send({
        msg: "Email associate with another account",
      });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});


// user login

userRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await RegModel.findOne({ email });
    if(!user){
      res.status(201).send({msg:"You don't have an account please register"})
    }
   else{
    bcrypt.compare(password, user.password, async (err, result) => {
      if (result) {
        var token = jwt.sign({ username: user.name, id: user._id }, "shhhhh");
        res.status(200).send({
          msg: "Login Successfull",
          token,
          user
        });
      } else {
        res.status(201).send({
          msg: "invalid credential",
          error: err,
        });
      }
    });
   }
  } catch (err) {
    res.status(400).send(err);
  }
});

// user update
userRoutes.patch("/users/:id/reset", async (req, res) => {
  console.log({ params: req.params });
  const { newPassword, currentPassword } = req.body;
  try {
    // finding user by userId
    const user = await RegModel.findOne({ _id: req.params.id });
    // checking user is exist or not
    if(user){
        // comparing password current password
        bcrypt.compare(currentPassword, user.password, async (err, result) => {
            if (result) {
              if (newPassword == currentPassword) {
                res.status(200).send({
                  msg: "New Password should be different to Current Password ",
                });
              } else {
                bcrypt.hash(newPassword, 10, async (err, hash) => {
                  if (hash) {
                      // storing new password
                    user.password = hash;
                    await user.save();
                    res.send({msg:"Password reset successfull"});
                  } else {
                    res.status(201).send({
                      msg: "invalid credential",
                      error: err,
                    });
                  }
                });
              }
            } else {
              res.status(201).send({
                msg: "invalid credential",
              });
            }
          });

    }
    else{
        res.status(200).send({
            msg:"You are not authorized to reset password"
        })
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = {
  userRoutes,
};
