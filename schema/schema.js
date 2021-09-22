const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

// contoh simple database
const book = [
  {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
  {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
  {name: 'The Long Earth', genre: 'Sci-Fi', id: '3'}
]

const BookType = new GraphQLObjectType({
  name    : "book",
  fields  : ()=>({
    id : {type: GraphQLString},
    name : {type: GraphQLString},
    genre : {type: GraphQLString}
  })
})

const RootQuery =new GraphQLObjectType({
  name : 'RootQueryType',
  fields : {
    book : {
      type : BookType,
      args: {id: {type : GraphQLString}},
      resolve(parents, args){
        // console get data from db
        return book.find(book => book.id == args.id)
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query : RootQuery
})