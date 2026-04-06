const Inquiry = require("../models/inquiry.model");

// create
const createInquiry = async (data) => {
  return await Inquiry.create(data);
};

module.exports = {
  createInquiry,
};