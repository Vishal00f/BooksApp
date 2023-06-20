import axios from 'axios';
import { useEffect, useState } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
function App() {
    const [books, setBooks] = useState([]);

    //fetch the books
    const fetchBooks=async ()=>{
        const response=await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }
    //fetch books is called at start of the application 
    useEffect(()=>{
        fetchBooks();
    },[])

  //to create a book  
    const createBook = async (title) => {
        const response=await axios.post('http://localhost:3001/books',{
            title
        })
    
        setBooks([...books,response.data]);

    }

    const deleteBookById = async (id)=>{
        const response=await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book)=>{
            return (book.id!==id)
            
        })

        setBooks(updatedBooks);

    }
    const editBookById= async (id,newTitle)=>{
        const response= await axios.put(`http://localhost:3001/books/${id}`,{
            title:newTitle
        })
        //this is to only update in the react app not db.json 
        const updatedBooks=books.map((book)=>{
            if(book.id===id){
                return {...book,...response.data};
            }
            return book;
        })
        setBooks(updatedBooks);
    }
    return (
        <div >
        <BookCreate onSubmit={createBook} />
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
        </div>
    );
}
export default App;