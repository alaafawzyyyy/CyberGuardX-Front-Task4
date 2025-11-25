// seedBooks.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./Models/Book.js";

dotenv.config();

const books = [
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    description: "A young wizard's journey begins.",
    photoLink: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    language: "English",
    link: "https://www.goodreads.com/book/show/3.Harry_Potter_and_the_Sorcerer_s_Stone",
    pages: 223,
    year: 1997
  },
  {
    author: "George Orwell",
    title: "1984",
    description: "A dystopian novel about totalitarian regime.",
    photoLink: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    language: "English",
    link: "https://www.goodreads.com/book/show/5470.1984",
    pages: 328,
    year: 1949
  },
  {
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    description: "A story of the Jazz Age and the American Dream.",
    photoLink: "https://covers.openlibrary.org/b/id/7352167-L.jpg",
    language: "English",
    link: "https://www.goodreads.com/book/show/4671.The_Great_Gatsby",
    pages: 180,
    year: 1925
  },
  {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    description: "A classic novel about love and society.",
    photoLink: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    language: "English",
    link: "https://www.goodreads.com/book/show/1885.Pride_and_Prejudice",
    pages: 279,
    year: 1813
  },
  {
    author: "Mark Twain",
    title: "Adventures of Huckleberry Finn",
    description: "A young boy's adventures along the Mississippi River.",
    photoLink: "https://covers.openlibrary.org/b/id/8225631-L.jpg",
    language: "English",
    link: "https://www.goodreads.com/book/show/2956.Adventures_of_Huckleberry_Finn",
    pages: 366,
    year: 1884
  },
  {
    author: "Herman Melville",
    title: "Moby-Dick",
    description: "The epic tale of Captain Ahab and the white whale.",
    photoLink: "https://covers.openlibrary.org/b/id/8101267-L.jpg",
    language: "English",
    link: "https://www.goodreads.com/book/show/153747.Moby_Dick_or_the_Whale",
    pages: 635,
    year: 1851
  },
  {
    author: "Leo Tolstoy",
    title: "War and Peace",
    description: "A historical novel about Napoleon’s invasion of Russia.",
    photoLink: "https://covers.openlibrary.org/b/id/8231851-L.jpg",
    language: "English",
    link: "https://www.goodreads.com/book/show/656.War_and_Peace",
    pages: 1225,
    year: 1869
  },
  {
    author: "Charles Dickens",
    title: "Great Expectations",
    description: "The story of the orphan Pip and his growth and development.",
    photoLink: "https://covers.openlibrary.org/b/id/8101003-L.jpg",
    language: "English",
    link: "https://www.goodreads.com/book/show/2623.Great_Expectations",
    pages: 505,
    year: 1861
  },
  {
    author: "Mary Shelley",
    title: "Frankenstein",
    description: "A story about a scientist who creates life.",
    photoLink: "https://covers.openlibrary.org/b/id/8231857-L.jpg",
    language: "English",
    link: "https://www.goodreads.com/book/show/18490.Frankenstein",
    pages: 280,
    year: 1818
  },
  {
    author: "H.G. Wells",
    title: "The War of the Worlds",
    description: "A science fiction novel about Martian invasion.",
    photoLink: "https://covers.openlibrary.org/b/id/8101217-L.jpg",
    language: "English",
    link: "https://www.goodreads.com/book/show/8909.The_War_of_the_Worlds",
    pages: 192,
    year: 1898
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");

    await Book.deleteMany();
    await Book.insertMany(books);
    console.log("10 Books added successfully!");

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

seedDB();
