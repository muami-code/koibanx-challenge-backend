const mongoose = require("mongoose");
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const StoreSchema = new mongoose.Schema({
  comercio: {
    type: String,
    required: [true, "comercio is required"],
    trim: true
  },
  cuit: {
    type: String,
    required: [true, "cuit is required"],
    trim: true
  },
  conceptos: {
    type: Array,
    default: [],
    required: [true, "Conceptos is required"]
  },
  balance: {
    type: Currency,
    required: [true, "Balance is required"],
    min: 0,
    max: 50000,
    default: 0
  },
  activo: {
    type: Boolean,
    default: false,
    required: [true, "active status is required"]
  },
  lastSale: {
    type: Date,
    min: "2015-01-01",
    max: "2022-12-09",
    required: [true, "date is required"],
  },
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model("Store", StoreSchema);
