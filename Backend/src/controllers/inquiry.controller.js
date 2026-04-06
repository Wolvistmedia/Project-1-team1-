const inquiryService = require("../services/inquiry.service");
const { validationResult } = require("express-validator");

exports.createInquiry = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const inquiry = await inquiryService.createInquiry(req.body);

    res.status(201).json({
      message: "Inquiry submitted successfully",
      data: inquiry,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
