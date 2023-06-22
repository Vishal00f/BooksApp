import '../styles.css';
import useBooksContext from '../hooks/use_books_context';
import { useState } from "react";
function BookCreate(){

    const {createBook}=useBooksContext();

    const [title,setTitle]=useState('');
    const handleChange= (event)=>{
        setTitle(event.target.value);
    }
    const handleFormSubmit =(event)=>{
        event.preventDefault();
        createBook(title);
        setTitle('');
    }
    return(
        <div className="box">
            <form onSubmit={handleFormSubmit}>
                <h3 className='heading'>Enter Book Title</h3>
                <input className="form-control" style={{width:"300px",display:"inline",margin:"1rem",marginTop:"1rem"}} value={title} onChange={handleChange}/>
                <button className="btn btn-outline-light" >Submit</button>
            </form>

        </div>
    );

}

export default BookCreate;