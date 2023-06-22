import { createContext,useState} from "react";
import axios from 'axios';

const BooksContext= createContext()

function Provider( {children} ){
    const [books, setBooks] = useState([]);

    //fetch the books
    const fetchBooks=async ()=>{
        const response=await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }

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
        //update in db
        const response= await axios.put(`http://localhost:3001/books/${id}`,{
            title:newTitle
        })
        //this is to only update in the react app not db.json 
        const updatedBooks=books.map((book)=>{
            if(book.id===id){
                //here 3 dots are used to copy the entire object as it with all its key value pairs 
                return {...book,...response.data};
            }
            return book;
        })
        setBooks(updatedBooks);
    }
    const valueToShare={
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById
    }
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );

}
export {Provider};
export default BooksContext;