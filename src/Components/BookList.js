import BookShow from './BookShow';
import useBooksContext from '../hooks/use_books_context';

function BookList() {
    const {books}=useBooksContext();


    const renderedBooks = books.map((book)=>{
        return <BookShow key={book.id} book={book}/>
    }
    )
    return (
        <div>
            {renderedBooks};
        </div>
    );
    }

export default BookList;