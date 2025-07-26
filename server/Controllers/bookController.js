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
    Author,
    Title,
    Description,
    PhotoLink,
    Language,
    Link,
    Pages,
    Year
  } = req.body;

  if (!Author || !Title || !Description || !PhotoLink || !Language || !Link || !Pages || !Year) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  try {
    const newBook = new Book({
     Author,
    Title,
    Description,
    PhotoLink,
    Language,
    Link,
    Pages,
    Year
    });

    await newBook.save();
    res.status(201).json({ message: 'Book added successfully', book: newBook });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while adding the book' });
  }
};