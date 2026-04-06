const Program = require("../models/program.model");

// Get all programs
const getAllPrograms = async (query) => {
  const filter = { isActive: true };

  // filter by category
  if (query.category) {
    filter.category = query.category;
  }

  // search by title
  if (query.search) {
    filter.title = { $regex: query.search, $options: "i" };
  }

  const programs = await Program.find(filter);
  return programs;
};

// Get program by slug
const getProgramBySlug = async (slug) => {
  return await Program.findOne({ slug, isActive: true });
};

// Create program
const createProgram = async (data) => {
  const program = await Program.create(data);
  return program;
};

// Update program
const updateProgram = async (id, data) => {
  const program = await Program.findByIdAndUpdate(id, data, {
    new: true,
  });
  return program;
};

module.exports = {
  getAllPrograms,
  getProgramBySlug,
  createProgram,
  updateProgram,
};