import { useState } from "react";

function BookEdit({book,onEdit,setShowEdit}){
    const [newTitle,setTitle]=useState(book.title);
    const handleChange= (event)=>{
        setTitle(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        onEdit(book.id,newTitle);
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