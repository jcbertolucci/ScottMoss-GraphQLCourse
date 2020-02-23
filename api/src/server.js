const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const { models, db } = require('./db')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { models, db }
  }
})

server.listen(4000)
  .then(() => console.log('on port 4000'))