const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes.js");
const cropRoutes = require("./routes/cropRoutes");
const fieldRoutes = require("./routes/fieldRoute.js");
const incomeCategoryRoute = require("./routes/incomeRoutes");
const expenseCategoryRouter = require("./routes/expenseRoute");
const incomeRoute = require("./routes/incomeTransaction");
const expenseRoute = require("./routes/expenseTransaction");
const varietyRoute = require("./routes/varietyRoutes.js");
const activityRoutes = require("./routes/activityRoute.js");
const app = express();
dotenv.config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server is working");
});

app.use("/api/user", userRoutes);
app.use("/api/crop", cropRoutes);
app.use("/api/field", fieldRoutes);
app.use("/api/activity", activityRoutes);
app.use("/api/incomecategory", incomeCategoryRoute);
app.use("/api/expenseCategory", expenseCategoryRouter);
app.use("/api/income", incomeRoute);
app.use("/api/expense", expenseRoute);
app.use("/api/variety", varietyRoute);
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname, "/frontend/build/index.html"));
}
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
