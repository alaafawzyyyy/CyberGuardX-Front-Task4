import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
  Author: String,
  Title: String,
  Description: String,
  PhotoLink : String,
  Language:String,
  Link:String,
  Pages:Number,
  Year:Number
});

const Book = mongoose.model('Book', bookSchema)
export default Book;