const { request, response } = require("express");
const { validationResult } = require("express-validator");
/**
 *
 * @param {(res:request, req:response) => Promise<any>} handler
 * @returns
 */
const networkRequest =
  (handler) =>
  /**
   * @param {request} req
   * @param {response} res
   * @param {*} next
   */
  async (req, res, next) => {
    try {
      // Check validator
      validationResult(req).throw();
      const result = await handler(req, res);
      res.status(200).json(result);
      next();
    } catch (exception) {
        console.error(exception);
        let status = 400;
        const error = {message : "An error has occurred"};
        if(exception.errors) {
            error.message = "There were issues validating your request";
            status = 422;
            error.payload = exception.mapped();
        }
        res.status(status).json(error);
    }
  };

module.exports = {networkRequest};
