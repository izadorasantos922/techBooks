import {useEffect, useState} from 'react'
import {booksService} from '../services/booksService'
import './Books.css';


const BackEndBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() =>{
    async function fecthBooks(){
      const data = await booksService();
      const backendbooks = data.filter(book => book.categoria === "back-end")
      setBooks(backendbooks);
    }
    fecthBooks();
  }, []);

  return <main className='main'>                  
  <h1 className='available'>Livros de Back end</h1>
  <div className="books">
        {books.map((book, index) => (
        <div className="book" key={index}>
          <p className='category'>{book.categoria}</p>
          <img src={book.imagem} alt={book.alt} />
          <h2>{book.titulo}</h2>
          <p className='price'>{book.preco}</p>
        </div>
      ))}
  </div>
    </main>
  
}

export default BackEndBooks