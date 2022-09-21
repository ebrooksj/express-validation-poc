const express = require("express");
const { getGreeting } = require("./src/controller/app.controller");
const { userRouter } = require("./src/routers/user.router");

const app = express();

app.get("/", getGreeting);
app.use("/user", userRouter);

const server = app.listen(3003, () => {
  console.debug(`Express server listening on port 3003`);
});
