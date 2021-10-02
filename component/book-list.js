import { useState, useEffect } from "react";
import {useQuery} from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetail from "./book-detail";

const BookList=()=>{
  const { loading, error, data } = useQuery(getBooksQuery);
  const [books, setBooks] = useState(null)
  const [bookId, setBookId] = useState(null)
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
    <div className="book-list" >
      <div>
        <h3>Book List :</h3>
        <ul className="list">
          {
            books && books.map((book) => {
              return(
              <li key={book.id} onClick={()=>setBookId(book.id)}>
                <p>{book.name}</p>
              </li>
              )
            })
          }
        </ul>
      </div>
        <BookDetail id={bookId} />
    </div>
  )
}

export default BookList
