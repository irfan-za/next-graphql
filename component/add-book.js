import { useState, useEffect } from "react";
import {useQuery} from "@apollo/client"
import { getAuthorsQuery } from "../queries/queries";



export default function Addbook(){
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [authors, setAuthors] = useState(null)
  useEffect(async() => {
    if(data && data !== undefined){
      setAuthors(data.authors)
    }
    console.log(data)
  }, [data])
  console.log(authors)

  const displayAuthor=()=>{
    if(loading){
      return (
          <option className="opt">Loading Author...</option>
      )
    }
    else{
       return authors && authors.map((author)=>{
         return <option className="opt" key={author.id}>{author.name}</option>
      })
    }
  }
  const AddBookHandler=(e)=>{
    e.preventDefault();
    // const formData= new FormData(e.target);
    // const data = Object.fromEntries(formData)
    // console.log(data)
    console.log(e.target.bookName)
  }

  return(
    <form onSubmit={AddBookHandler}>
      <input type="text" />
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="book-name">Book Name :</label>
            </td>
            <td>
              <input name="bookName" type="text" />
            </td>
          </tr>
          <tr >
            <td>
              <label htmlFor="genre">Genre :</label>
            </td>
            <td>
              <input name="genre" type="text" />
            </td>
          </tr>
          <tr >
            <td>
              <label htmlFor="author">Author :</label>
            </td>
            <td>
            <select name="author">
             {displayAuthor()}
            </select>
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td>
              <input type="submit" value="+" style={{ padding:"5px 10px", border:"1px solid purple", backgroundColor:"plum", font:"bold", fontSize:"24px"}}/>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}