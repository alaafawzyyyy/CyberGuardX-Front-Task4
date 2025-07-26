import React, { useState } from 'react';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import './App.css';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div>
      <h1>Book Store</h1>

      <BookList onSelectBook={setSelectedBook} />

      {selectedBook && (
        <div className="popup-overlay" onClick={() => setSelectedBook(null)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedBook(null)}>X</button>
            <BookDetails book={selectedBook} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
