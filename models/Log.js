const mongoose = require("mongoose"); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor
const model = mongoose.model; // shorthand for model function

const logSchema = new Schema({
    title: {type: String, required: true},
    entry: {type: String, timestamps: true},
    shipIsBroken: {type: Boolean, default: true},

    // comments: {type: String, required: false}
})

const Log = model("Log", logSchema)

module.exports = Log;