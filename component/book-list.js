import { useState, useEffect } from "react";
import {useQuery} from "@apollo/client";
import { getBooksQuery } from "../queries/queries";


const BookList=()=>{
  const { loading, error, data } = useQuery(getBooksQuery);
  const [books, setBooks] = useState(null)
  useEffect(async() => {
    if(data){
      setBooks(data.books)
    }
  }, [data])

  if(loading){
    return (
      <div className="loading">
        <h3>Loading Book...</h3>
      </div>
    )
  }
  else if(error){
    return (
      <div>
        <h3 style={{color:"red"}}>Something error!</h3>
      </div>
    )
  }
  return(
    <div style={{marginBottom:"20px"}}>
      <ul id="book-list">
        {
          books && books.map((book) => {
            return(
            <li key={book.id}>
              <h3>{book.name}</h3>
              <p>genre : {book.genre}</p>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default BookList
