"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Expense.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Expense.init(
    {
      amount: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "Amount is required!",
          },
        },
      },
      label: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Label is required!",
          },
        },
      },
      expenseDate: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: {
            args: true,
            msg: "Expense Date is required!",
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Expense",
    }
  );
  return Expense;
};
