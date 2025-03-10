import { useState } from 'react';
// eslint-disable-next-line react/prop-types
const BookAdd = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState(0);
  const resetInputField = () => {
    setTitle('');
    setReleaseYear('');
  };
  const onAddClick = () => {
    onAddBook(title, releaseYear), resetInputField();
  };
  return (
    <div className='search'>
      <input
        className='search'
        type='text'
        value={title}
        placeholder='Book Tittle'
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='number'
        value={releaseYear}
        placeholder='Release Year'
        onChange={(e) => setReleaseYear(e.target.value)}
      />
      <button type='submit' onClick={onAddClick}>
        Add Book
      </button>
    </div>
  );
};

export default BookAdd;
