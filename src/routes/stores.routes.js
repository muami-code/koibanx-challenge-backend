const router = require("express").Router();

const {
  getStores,
  postStore,
  putStore,
  deletStore
} = require("../controllers/store.controller.js");
const Store = require("../models/store");

// create newStore
router.route("/stores").post(postStore);
// get Stores
router.route("/stores").get(getStores);
// update a Store
router.route("/stores/:id").put(putStore);
// delete a Store
router.route("/stores/:id").delete(deletStore);

module.exports = router;
