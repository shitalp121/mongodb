const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  bookName: String,
  price:Number,
  brand:String
},
{
  versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model("Book", bookSchema);