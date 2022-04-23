const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { Income } = require("../models/IncomeModel");
const { isAuth } = require("../utils/utils");

const router = express.Router();

router.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const income = new Income({
      field: req.body.field,
      category: req.body.category,
      incomeAmount: req.body.incomeAmount,
      incomeDate: new Date(req.body.incomeDate),
      receiptNo: req.body.receiptNo,
      customerName: req.body.customerName,
      shortNotes: req.body.shortNotes,
    });
    const savedIncome = await income.save();
    res.send({ message: "Income saved", income: savedIncome });
  })
);
router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const incomes = await Income.find();
    res.send(incomes);
  })
);
router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const income = await Income.findById(req.params.id);
    res.send(income);
  })
);
router.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const income = await Income.findById(req.params.id);
    if (!income) return res.send({ message: "Income not found" });
    income.field = req.body.field || income.field;
    income.category = req.body.category || income.category;
    income.incomeAmount = req.body.incomeAmount || income.incomeAmount;
    income.incomeDate = req.body.incomeDate
      ? new Date(req.body.incomeDate)
      : income.incomeDate;
    income.receiptNo = req.body.receiptNo || income.receiptNo;
    income.customerName = req.body.customerName || income.customerName;
    income.shortNotes = req.body.shortNotes || income.shortNotes;

    const updatedIncome = await income.save();
    res.send({ messge: "Income updated", income: updatedIncome });
  })
);
router.delete(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const income = await Income.findById(req.params.id);
    if (!income) return res.send({ message: "Income not found" });
    const deletedIncome = await income.delete();
    res.send({ message: "Income deleted successfully" });
  })
);
module.exports = router;