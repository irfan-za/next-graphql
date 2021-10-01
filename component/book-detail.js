import {useQuery, useReactiveVar} from "@apollo/client";
import { getBookDetailQuery } from "../queries/queries";


const BookDetail=({id})=>{
    const { loading, error, data } = useQuery(getBookDetailQuery,{
      variables:{
        id
      }
    });

    console.log(id,data,error)
    const result=()=>{
      if(data){
        const {book} =data;
        return(
          <div>
            <h2>{book.name}</h2>
            <p>genre : {book.genre}</p>
            <p>author : {book.author.name}</p>
            <p>books of this author :</p>
            <ul>
              {
                book.author.books.map((book)=>{
                  return <li>{book.name}</li>
                })
              }
            </ul>
        </div>
        )
      }
      else if(loading){
        return (
          <div className="loading">
            <h3>Loading Book...</h3>
          </div>
        )
      }
      else if(error){
        return (
          <div>
            <h3 style={{color:"red"}}>Nothing book selected</h3>
          </div>
        )
      }

    }

    
    return(
      <div id="book-detail">
        Book Detail :
        { result()}
      </div>
    )
  }
  
  export default BookDetail