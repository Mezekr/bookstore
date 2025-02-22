/* eslint-disable react/prop-types */
import './../src/App.css';
const BookCard = ({
  book: { id, title, release_year },
  setNewTitle,
  updateBook,
  deleteBook,
}) => {
  return (
    <>
      <div>
        <p>Title: {title}</p>
        <p>Release Year: {release_year}</p>
      </div>
      <div>
        <input
          type='text'
          placeholder='Edit Title'
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={() => updateBook(id, release_year)}>Edit</button>
        <button onClick={() => deleteBook(id)}>Delete</button>
      </div>
    </>
  );
};

export default BookCard;
