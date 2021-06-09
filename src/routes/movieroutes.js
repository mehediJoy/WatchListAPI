const express = require("express");

var router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

const movieController = require("../controllers/moviecontroller");
const verifyToken = require("../middlewares/verifytoken");

router.post("/save", verifyToken, movieController.create);
router.patch("/update/:id", verifyToken, movieController.update);
router.delete("/delete/:id", verifyToken, movieController.delete);
router.get("/:id", verifyToken, movieController.getone);
router.get("/", verifyToken, movieController.getall);

module.exports = router;
