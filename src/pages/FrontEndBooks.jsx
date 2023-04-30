import  './Books.css'
import {useEffect, useState} from 'react'
import {booksService} from '../services/booksService'

const FrontEndBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() =>{
    async function fecthBooks(){
      const data = await booksService();
      const frontendbooks = data.filter(book => book.categoria === "front-end")
      setBooks(frontendbooks);
    }
    fecthBooks();
  }, []);

  return <main className='main'>                  
  <h1 className='available'>Livros de Front end</h1>
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

export default FrontEndBooks