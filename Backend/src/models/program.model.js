const mongoose = require("mongoose");
const slugify = require("../utils/slugify");

const programSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: String,
    level: String,
    image: String,
    features: [String],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);


programSchema.pre("save", function (next){
  if (!this.slug) {
    this.slug = slugify(this.title);
  }
  
});

module.exports = mongoose.model("Program", programSchema);
