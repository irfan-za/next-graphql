const grapql = requre('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

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
      }
    }
  }
})

module.exports = new GraphQLSchema{{
  query : RootQuery
}}