const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes.js");
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

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
