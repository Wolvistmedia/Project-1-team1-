const express = require("express");
const router = express.Router();

const controller = require("../controllers/program.controller");



router.get("/", controller.getPrograms);
router.get("/:slug", controller.getProgram);



module.exports = router;