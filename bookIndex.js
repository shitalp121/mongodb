const { Router, response } = require("express");
const express = require("express");
require("./config");
const Book = require("./book");
const app = express();

app.use(express.json());
app.post("/create", async (req, resp) =>{
  let data = new Book(req.body)
  try{
    const result = await data.save();
    resp.status(201).json({result})
  }catch (err){
    resp.status(400).json({message: err.message});
  }
})

app.get("/list", async (req, res) => {
  let data = await Book.find()
  res.send(data)
})

app.get("/list/:bookName", async (req, res) => {
  let data = await Book.find(req.params)
  res.send(data)
})

app.delete("/delete/:_id", getUser, async (req, res) => {

  try {
    await Book.deleteOne(req.params)
    res.json({message:"Book deleted successfully"})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.put("/update/:_id", getUser, async (req, res) => {
  try {
    let data = await Book.updateOne(req.params, {$set: req.body});
    res.json(data)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})

async function getUser(req, res,next) {
  let book;
  try {
    book = await Book.findById(req.params);
    if (!book) {
      return res.status(404).json({message: "Cannot find book"})
    }
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
  res.book = book;
  next()
}


app.listen(5000); 