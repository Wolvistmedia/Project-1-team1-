const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: String,
    mobile: {
      type: String,
      required: true,
    },
    message: String,
    course: String,
    type: {
      type: String,
      enum: ["contact", "consultation"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", inquirySchema);