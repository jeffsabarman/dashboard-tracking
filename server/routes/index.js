const router = require("express").Router();

const userRouter = require("./userRouter");
const expenseRouter = require("./expenseRouter");

const authentication = require("../middleware/authentication");

router.use("/user", userRouter);

router.use(authentication);

router.use("/expense", expenseRouter);

module.exports = router;
