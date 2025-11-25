import './BookDetails.css';

function BookDetails({ book }) {
  if (!book) return <p className="no-selection">← Select a book to view details.</p>;

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <img src={book.photoLink} alt={book.title} />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Language:</strong> {book.language}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
      <p><strong>Year:</strong> {book.year}</p>
      
      <a href={book.link} target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  );
}

export default BookDetails;
