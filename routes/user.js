const express = require("express");
const User = require("../models/user");

const userRouter = express.Router();

//add user
userRouter.post("/add", async (req, res) => {
  try {
    let newuser = new User(req.body);
    let result = await newuser.save();
    res.send({ user: result, msg: "user is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all users
userRouter.get("/", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ users: result, msg: "all users" });
  } catch (error) {
    console.log(error);
  }
});

//get user by id

userRouter.get("/:id", async (req, res) => {
  try {
    let result = await User.findById(req.params.id);
    res.send({ user: result, msg: "one user" });
  } catch (error) {
    console.log(error);
  }
});

//delete user
userRouter.delete("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndDelete(req.params.id);
    res.send({ msg: "user is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update user
userRouter.put("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ user: "result", msg: "user is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
