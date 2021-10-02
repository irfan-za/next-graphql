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
            <table>
              <tr>
                <td><h4>title : </h4></td>
                <td><h4>{book.name}</h4></td>
              </tr>
              <tr>
                <td><p>genre : </p></td>
                <td><p>{book.genre}</p></td>
              </tr>
              <tr>
                <td><p>author : </p></td>
                <td><p>{book.author.name}</p></td>
              </tr>
            </table>
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
        <h3>Book Detail :</h3>
        { result()}
      </div>
    )
  }
  
  export default BookDetail