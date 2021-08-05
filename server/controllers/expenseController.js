const { Expense } = require("../models");

class Controller {
  static async addExpense(req, res) {
    try {
      const newExpense = await Expense.create({
        amount: req.body.amount,
        label: req.body.label,
        expenseDate: req.body.expenseDate,
        userId: req.loggedInUser.id,
      });
      res.status(201).json({ id: newExpense.id });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async getExpense(req, res) {
    try {
      const expenses = await Expense.findAll({
        where: {
          userId: req.loggedInUser.id,
        },
      });
      res.status(200).json(expenses);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = Controller;
