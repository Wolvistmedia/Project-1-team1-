const express = require("express");
const router = express.Router();

const controller = require("../controllers/inquiry.controller");

const { body } = require("express-validator");

// Validation 
const validateInquiry = [
  body("name").notEmpty().withMessage("Name is required"),

  body("mobile")
    .notEmpty()
    .withMessage("Mobile is required")
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile must be 10 digits"),

  body("email")
    .optional()
    .isEmail()
    .withMessage("Invalid email"),

  body("type")
    .isIn(["contact", "consultation"])
    .withMessage("Invalid type"),
];

router.post("/", validateInquiry, controller.createInquiry);


module.exports = router;