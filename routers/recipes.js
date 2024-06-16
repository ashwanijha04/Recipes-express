const express = require("express");
const router = express.Router();

const { getAll } = require("../controllers/recipes");
const { getAllNames } = require("../controllers/recipes");

router.get("/", getAll);
router.get("/names", getAllNames);

module.exports = router;
