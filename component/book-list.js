import {gql, useQuery} from "@apollo/client"
import { graphql } from "graphql";


const getBooksQuery = gql`
{
  books{
    name
    genre
    author{
      name
    }
  }
}
`
const BookList=(books)=>{
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(data)
  return(
    <div>
      <ul id="book-list">
        <li>Book NAme</li>
      </ul>
    </div>
  )
}

export default BookList
