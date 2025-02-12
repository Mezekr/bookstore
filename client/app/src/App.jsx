import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([])

  const BASE_URL = "http://127.0.0.1:8000/api/books"

  const fetchBooks = async ()=>{
    try {
      const response = await fetch(`${BASE_URL}`)
      if(!response.ok){
          console.error("Something went wrong");
      }
      const data = await response.json()
      // console.log(data);
      setBooks(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])
  

  return (
    <>

     <h1>Book Store</h1>
      <div>
       <input type='text' placeholder='Book Tittle'/>
       <input type='number' placeholder='Realse year'/>
       <button type='submit' >Add Book</button>

      </div>
      <div>
        {books.length <= 0 ? (<h1>NO Book to display</h1>):(
          books.map((book) =>{
            return <div key={book.id}>
              <p>Title: { book.title}</p>
              <p>Release Year: { book.release_year}</p>
            </div>
})
        )}
        
      </div>
    </>
  )
}

export default App
