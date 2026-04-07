const programService = require("../services/program.service");

// GET /api/programs
const getPrograms = async (req, res) => {
  try {
    const programs = await programService.getAllPrograms();
    res.json(programs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/programs/:slug
const getProgram = async (req, res) => {
  try {
    const program = await programService.getProgramBySlug(req.params.slug);

    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }

    res.json(program);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/programs
const createProgram = async (req, res) => {
  try {
    const program = await programService.createProgram(req.body);
    res.status(201).json(program);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/programs/:id
const updateProgram = async (req, res) => {
  try {
    const program = await programService.updateProgram(
      req.params.id,
      req.body
    );

    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }

    res.json(program);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    getPrograms,
    getProgram,
    createProgram,
    updateProgram,
};
