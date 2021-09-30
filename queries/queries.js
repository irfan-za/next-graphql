import {gql} from "@apollo/client";


const getBooksQuery = gql`
{
  books{
    name
    genre
    id
    author{
      name
    }
  }
}
`   

const getAuthorsQuery = gql`
{
  authors{
    name
    id
  }
}
`

export {getAuthorsQuery, getBooksQuery}