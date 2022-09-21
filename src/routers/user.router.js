import {
  createUser,
  getAllUsers,
  getUserById,
} from "../controller/user.controller";
import {
  createUserValidator,
  userIdValidator,
} from "../validators/user.validator";

const bodyParser = require("body-parser");
const express = require("express");

const jsonParser = bodyParser.json({});
const userRouter = express.Router();
userRouter.get("", getAllUsers);
userRouter.get("/:id", userIdValidator, getUserById);
userRouter.post("", createUserValidator, jsonParser, createUser);

export { userRouter };
