/* eslint-disable react/prop-types */

const BookCard = ({
  book: { id, title, release_year },
  setNewTitle,
  updateBook,
  deleteBook,
}) => {
  return (
    <>
      <div className='book-card'>
        <div>
          <h3>Title: {title}</h3>
          <h3>Release Year: {release_year}</h3>
        </div>

        <input
          className='search'
          type='text'
          placeholder='Edit Title'
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <div className='flex  flex-col justify-between gap-3 md:flex-row'>
          <button onClick={() => deleteBook(id)}>Delete</button>
          <button onClick={() => updateBook(id, release_year)}>Edit</button>
        </div>
      </div>
    </>
  );
};

export default BookCard;
