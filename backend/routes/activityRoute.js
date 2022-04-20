const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { Planting } = require("../models/PlantingsModel.js");
const { isAuth } = require("../utils/utils.js");
const router = express.Router();

// create planting
router.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const planting = new Planting({
      plantingDate: new Date(req.body.plantingDate),
      activityType: req.body.activityType,
      crop: req.body.crop,
      field: req.body.field,
      fHarvestDate: new Date(req.body.fHarvestDate),
      qtyPlanted: req.body.qtyPlanted,
      estimatedYield: req.body.estimatedYield,
      distanceBetweenPlants: req.body.distanceBetweenPlants,
      seedCompany: req.body.seedCompany,
      seedLotNumber: req.body.seedLotNumber,
      seedOrigin: req.body.seedOrigin,
      shortNotes: req.body.shortNotes,
      createdBy: req.user,
    });
    const createdPlanting = await planting.save();
    res.send({ message: "Planting created", planting: createdPlanting });
  })
);

module.exports = router;
