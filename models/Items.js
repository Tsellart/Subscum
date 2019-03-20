var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var itemsSchema = new Schema({
  userName: {
    type: String,
    require: true,
    index: true,
    sparse: true
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
