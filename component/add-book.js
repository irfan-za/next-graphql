import { useState, useEffect } from "react";
import {useQuery, useMutation} from "@apollo/client"
import { getAuthorsQuery, addBookMutation, getBooksQuery } from "../queries/queries";



export default function Addbook(){
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBookMut, { loadingMutation, errorMutation, dataMutation }] = useMutation(addBookMutation)
  const [authors, setAuthors] = useState(null)
  useEffect(async() => {
    if(data && data !== undefined){
      setAuthors(data.authors)
    }
  }, [data])
  // console.log(addBookMut, loadingMutation, dataMutation)

  const displayAuthor=()=>{
    if(loading){
      return (
          <option className="opt">Loading Author...</option>
      )
    }
    else{
       return authors && authors.map((author)=>{
         return <option className="opt" key={author.id} value={author.id}>{author.name}</option>
      })
    }
  }
  const AddBookHandler=(e)=>{
    e.preventDefault();
    const data = {
      name : e.target.bookName.value,
      genre : e.target.genre.value,
      authorId : e.target.author.value,
    }
    addBookMut({
      variables: {
        name: data.name,
        genre: data.genre,
        authorId: data.authorId,
      },
      refetchQueries:[{query :getBooksQuery}]
    })
  }

  return(
    <form onSubmit={AddBookHandler}>
      <h3>Add Book</h3>
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
              <input type="submit" value="+" className="button"/>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}