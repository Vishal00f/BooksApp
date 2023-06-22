import {  useState } from "react";
import useBooksContext from '../hooks/use_books_context';
function BookEdit({book,setShowEdit}){
    const {editBookById}=useBooksContext;
    const [newTitle,setTitle]=useState(book.title);
    const handleChange= (event)=>{
        setTitle(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        editBookById(book.id,newTitle);
        setShowEdit(false);
    }

    return(
    <div>
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
        <input value={newTitle} className="input" onChange={handleChange}/>
        <button className="btn btn-dark">Save</button>
        </form>
    </div>
    );
    }
    
    export default BookEdit;