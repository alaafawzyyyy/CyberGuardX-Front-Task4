import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  photoLink : String,
  language:String,
  link:String,
  pages:Number,
  year:Number
});

const Book = mongoose.model('Book', bookSchema)
export default Book;