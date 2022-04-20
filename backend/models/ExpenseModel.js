const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema(
  {
    field: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "ExpenseCategory" },
    expenseAmount: { type: Number, required: true },
    expenseDate: { type: Date, required: true },
    receiptNo: { type: String },
    customerName: { type: String },
    shortNotes: { type: String },
  },
  {
    timestamps: true,
  }
);
const Expense = mongoose.model("Income", expenseSchema);
module.exports = { Expense };
