const { application } = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://omkar:omkar143@cluster0.cx20eke.mongodb.net/DB1?retryWrites=true&w=majority");


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
    function insertData(){
    console.log("Connection Successful!");

    // define Schema
    var BookSchema = mongoose.Schema({
        name: String,
        price: Number,
        quantity: Number
    },{
        versionKey:false
    });

    // compile schema to model
    var Book = mongoose.model('Book', BookSchema);

    // a document instance
    var book1 = new Book({ name: 'Introduction to Python', price: 100, quantity: 50 });

    // save model to database
    book1.save(function(err, book) {
        if (err) return console.error(err);
        console.log(book.name + " saved to bookstore collection.");
    });

};
// insertData()
// const createdata = async() => {

//     data = await db.insertOne({ name: "dddd", age: 23 })
// }
// createdata()

const getData =  () => {
    // let data =  db.db("DB1");
    data = db.collection("book");
    // data =  data.toArray();
    console.log(data.data());
    // console.log("erer"+ await db.getCollectionNames())
  };

  getData()