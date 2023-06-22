import { useState} from "react";
import BookEdit from './BookEdit'
import useBooksContext from '../hooks/use_books_context';
function BookShow({book}){
    const {deleteBookById}=useBooksContext();
    const [showEdit,setShowEdit]=useState(false);
    const handleClick= ()=>{
        deleteBookById(book.id)
    }
    const handleEditClick=()=>{
        setShowEdit(!showEdit);
    }
    let content=<h3>{book.title}</h3>
    if(showEdit){
        content=<BookEdit book={book} setShowEdit={setShowEdit}/>
    }
    return(
        <div className="book-show">
            <div>
                <img src={`https://picsum.photos/seed/${book.id}/300/200
`} alt="book"></img>
            {content}
            </div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleClick}>Delete</button>
            </div>
        </div>
    );
}
export default BookShow;