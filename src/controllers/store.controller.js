const storeCtrl = {}; // create a constant with an empty object and then export it along with its properties

const express = require('express')
const app = express();
app.use(express.json())

const Store = require("../models/store");
// get stores
storeCtrl.getStores = async (req, res, next) => {
      res.json({message: "getting Stores..."})
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const results = {};
      if (!page || !limit) { return res.status(400).json({message: "Error! You must enter valid page and limit"}) }
      if (isNaN(parseInt(limit))) { return res.status(400).json({message: "Error! limit is null"}) }
      if (parseInt(limit) > 10 || parseInt(limit) < 1) { return res.status(400).json({message: "Error! limit is > 1 and < 10"}) }
      if (endIndex < await Store.countDocuments().exec()) {
        results.next = { page: page + 1, limit: limit };
      }
      if (startIndex > 0) {
        results.previous = { page: page - 1, limit: limit };
      }
      try {
        results.results = await Store.find().limit(limit).skip(startIndex).exec();
        res.paginatedResults = results;
        console.log(res.paginatedResults);
        next();
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
};
// post Store
storeCtrl.postStore = async (req, res, next) => {
  try {
    const { comercio, cuit, conceptos, balance, lastSale } = req.body;
    const activo = req.body.activo ? req.body.activo : false; //Predeterminate in false
    const newStore = await new Store({
      comercio,
      cuit,
      conceptos,
      balance,
      activo,
      lastSale,
    });
    const storeSaved = await newStore.save();
    res.json(storeSaved);
  } catch (e) {
    res
      .status(400)
      .send("Bad request! Error posting store");
  }
};
// update one store
storeCtrl.putStore = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Store.findByIdAndUpdate(id, body);
    res.json({ message: "Store was updated successfully" });
  } catch (e) {
    res
      .status(400)
      .send(`Bad request! Error updating store with id: ${req.params.id}`);
  }
};
// delete store
storeCtrl.deletStore = async (req, res) => {
  try {
    const { id } = req.params;
    await Store.findByIdAndDelete(id);
    res.json({ message: "Store deleted successfully" });
  } catch (e) {
    res
      .status(400)
      .send(`Bad request! Error deleting store with id: ${req.params.id}`);
  }
};

module.exports = storeCtrl;
