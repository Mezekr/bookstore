import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState(0);
  const [newTitle, setNewTitle] = useState('');

  const BASE_URL = 'http://127.0.0.1:8000/api/books/';

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${BASE_URL}`);
      if (!response.ok) {
        console.error('Something went wrong');
      }
      const data = await response.json();
      // console.log(data);
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async () => {
    try {
      const bookdetails = {
        title: title,
        release_year: releaseYear,
      };

      const response = await fetch(`${BASE_URL}/create`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(bookdetails),
      });

      const newBook = await response.json();
      setBooks((prev) => [...prev, newBook]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateBook = async (pk, release_year) => {
    try {
      const bookdetails = {
        title: newTitle,
        release_year,
      };

      const response = await fetch(`${BASE_URL}${pk}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(bookdetails),
      });

      const data = await response.json();
      setBooks((prev) =>
        prev.map((book) => {
          if (book.id === pk) {
            return data;
          } else {
            return book;
          }
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Book Store</h1>
      <div>
        <input
          type='text'
          placeholder='Book Tittle'
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='number'
          placeholder='Release Year'
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <button type='submit' onClick={addBook}>
          Add Book
        </button>
      </div>
      <div>
        {books.length <= 0 ? (
          <h1>NO Book to display</h1>
        ) : (
          books.map((book) => {
            return (
              <div key={book.id}>
                <p>Title: {book.title}</p>
                <p>Release Year: {book.release_year}</p>
                <input
                  type='text'
                  placeholder='Edit Title'
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <button onClick={() => updateBook(book.id, book.release_year)}>
                  Edit
                </button>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
