const mongoose = require("mongoose");

const movesSchema = new mongoose.Schema({
    moves: Array,
    winner: String,
});

module.exports = mongoose.model("moves", movesSchema);
