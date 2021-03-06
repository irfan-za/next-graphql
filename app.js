const express = require('express');
const {graphqlHTTP} =  require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

// allow cross-origin-request
app.use(cors())

// connect to Database
mongoose.connect("mongodb+srv://irfan:123@gql.xqmak.mongodb.net/gql?retryWrites=true&w=majority");
mongoose.connection.once('open', ()=>{
  console.log("connected to DB!")
})


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql : true
}));
app.listen(4000, ()=>{
  console.log("Running on port 4000")
});