const { request, response } = require("express");
const { networkRequest } = require("../util/network.util");

/**
 * Get greeted. Feel nice!
 * @param {request} req
 * @param {response} res
 */
const getGreeting = networkRequest(async (req, res) => {
    console.debug(`Entered request`);
  return { message: "Hello there!" };
});

module.exports = { getGreeting };
