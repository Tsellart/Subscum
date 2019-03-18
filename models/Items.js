var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var itemsSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    require: true,
    index: true,
    sparse: true
  },
  passWord: {
    type: String,
    require: true,
    trim: true,
    minlength: [6, 'Password is required!'],
  },
  service: {
    type: String,
    },
  price: {
    type: String,
    },
  rate: {
    type: String,
    },
});

const Items = mongoose.model("Items", itemsSchema);

module.exports = Items;
