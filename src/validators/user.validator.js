const {
  param,
  checkSchema,
} = require("express-validator");

const createUserValidator = checkSchema({
  name: {
    in: ["body"],
    isString: true,
    errorMessage: "Name is required and should be a string",
  },
  email: {
    in: ["body"],
    isEmail: true,
    errorMessage: "Email is required and should be a string",
  },
  favoriteNumber: {
    in: ["body"],
    isInt: true,
    toInt: true,
  },
  isHungry: {
    in: ["body"],
    isBoolean: true,
    toBoolean: true,
  },
});

const userIdValidator = param("id").exists().isInt().toInt();

module.exports = {createUserValidator, userIdValidator};
