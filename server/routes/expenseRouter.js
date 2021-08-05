const router = require("express").Router();
const expenseController = require("../controllers/expenseController");

router.post("/", expenseController.addExpense);
router.get("/", expenseController.getExpense);

module.exports = router;
