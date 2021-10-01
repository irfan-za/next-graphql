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
const getBookDetailQuery= gql `
query($id: ID!){
  book(id: $id){
    id
    name
    genre
    author{
      id
      name
      age
      books{
        name
        id
      }
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

const addBookMutation = gql`
mutation($name : String!, $genre : String!, $authorId : ID!){
  addBook(name : $name, genre : $genre, authorId : $authorId){
    name
    id
  }
}
`

export {getAuthorsQuery, getBooksQuery, getBookDetailQuery, addBookMutation}