const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema({
    email : {type: String, required: true},
    password : {type: String, require: true}
});

module.exports = mongoose.model("User", userSchema);
