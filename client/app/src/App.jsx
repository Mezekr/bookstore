import { useEffect, useState } from 'react';
import BookAdd from '../components /BookAdd';
import BookCard from '../components /BookCard';
// import './App.css';

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
      if (!response.ok) {
        throw new Error(`Failed to fetch books! status: ${response.status}`);
      }
      const data = await response.json();
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

      const response = await fetch(`${BASE_URL}create`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(bookdetails),
      });
      if (!response.ok) {
        throw new Error(`Failure to add a Book! status: ${response.status}`);
      }

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
      if (!response.ok) {
        throw new Error(
          `Failed to update the Book! status: ${response.status}`
        );
      }
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

  const deleteBook = async (pk) => {
    try {
      const response = await fetch(`${BASE_URL}${pk}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(
          `Failed to delete the Book! status: ${response.status}`
        );
      }
      setBooks((prev) => prev.filter((book) => book.id !== pk));
    } catch (error) {
      console.error(error);
    }
  };

  // const resetInputField = () => {
  //   setTitle('');
  //   setNewTitle('');
  //   setReleaseYear(0);
  // };

  return (
    <main>
      <div className='pattern'>
        <div className='wrapper'>
          <header>
            <h1>Book Store</h1>
            <BookAdd />
            <div>
              <input
                className='search'
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
          </header>
          <section className='all-books'>
            {books.length <= 0 ? (
              <h1>NO Book to display</h1>
            ) : (
              books.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  setNewTitle={setNewTitle}
                  updateBook={updateBook}
                  deleteBook={deleteBook}
                />
              ))
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
