const express = require("express");
const router = express.Router();

const controller = require("../controllers/program.controller");



router.get("/", controller.getPrograms);
// testing purpose only
router.post("/new",controller.createProgram);
router.get("/:slug", controller.getProgram);



module.exports = router;