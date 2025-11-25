import { useEffect, useState } from 'react';
import './BookList.css';

function BookList({ onSelectBook }) {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 9;
  const indexOfLast = currentPage * booksPerPage;
  const indexOfFirst = indexOfLast - booksPerPage;
  const currentBooks = books.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(books.length / booksPerPage);

  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        setBooks(data);
      })
      .catch(err => console.error('Fetch Error:', err));
  }, []);

  return (
    <div className="book-list">
      <h2>Available Books</h2>

      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <>
          <div className="grid-container">
            {currentBooks.map(book => (
              <div key={book._id} className="book-card" onClick={() => onSelectBook(book)}>
                <img src={book.photoLink} alt={book.title} />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            ))}
          </div>

          <div className="pagination">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? 'active' : ''}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default BookList;
