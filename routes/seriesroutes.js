const express = require("express");

var router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

const seriesController = require("../controllers/seriescontroller");
const verifyToken = require("../middlewares/verifytoken");

router.post("/save", verifyToken, seriesController.create);
router.patch("/update/:id", verifyToken, seriesController.update);
router.delete("/delete/:id", verifyToken, seriesController.update);
router.get("/:id", verifyToken, seriesController.getone);
router.get("/", verifyToken, seriesController.getall);

module.exports = router;
