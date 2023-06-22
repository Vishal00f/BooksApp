import { useContext, useEffect } from 'react';
import BooksContext from './context/books';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
function App() {
   const {fetchBooks}=useContext(BooksContext);
    //fetch books is called at start of the application 
    useEffect(()=>{
        fetchBooks();
    },[])

  
    return (
        <div >
        <BookCreate />
        <BookList />
        </div>
    );
}
export default App;