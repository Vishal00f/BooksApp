import { useState } from "react";
import BookEdit from './BookEdit'
function BookShow({book, onDelete, onEdit}){
    const [showEdit,setShowEdit]=useState(false);
    const handleClick= ()=>{
        onDelete(book.id);
    }
    const handleEditClick=()=>{
        setShowEdit(!showEdit);
    }
    let content=<h3>{book.title}</h3>
    if(showEdit){
        content=<BookEdit book={book} onEdit={onEdit} setShowEdit={setShowEdit}/>
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