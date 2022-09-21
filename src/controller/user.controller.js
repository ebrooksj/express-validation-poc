const { request, response } = require("express");
const { networkRequest } = require("../util/network.util");

const getAllUsers = networkRequest(async (req, res) => {
  return { message: "lots of users" };
});

const getUserById = networkRequest(async (req, res) => {
  const { id } = req.params;
  return { id, status: "all good" };
});

const createUser = networkRequest(async (req, res) => {
  const { name, email, favoriteSandwich } = req.body;
  return { result: `created user ${name} with email ${email}` };
});

module.exports = { getAllUsers, getUserById, createUser };
