const gql = require ('graphql-tag')
const { ApolloServer } = require('apollo-server')
const { generateRamdomUsers } = require('./db/users')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { models, db }
  }
})

server.listen(4000)
  .then(() => console.log('on port 4000'))