const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  projectname: {
    type: String,
    required: true,
  },
  issuename: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("data", userSchema);