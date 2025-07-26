import Book from '../Models/Book.js';

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const addBook = async (req, res) => {
  const {
    author,
    title,
    description,
    photoLink,
    language,
    link,
    pages,
    year
  } = req.body;

  if (!author || !title || !description || !photoLink || !language || !link || !pages || !year) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  try {
    const newBook = new Book({
     author,
    title,
    description,
    photoLink,
    language,
    link,
    pages,
    year
    });

    await newBook.save();
    res.status(201).json({ message: 'Book added successfully', book: newBook });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while adding the book' });
  }
};