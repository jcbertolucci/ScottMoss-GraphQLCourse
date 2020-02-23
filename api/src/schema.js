const gql = require ('graphql-tag')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    avatar: String!
    message: String
  }

  type Beer {
    id: ID!
    name: String!
    brewery: String!
    type: String
    style: String
  }

  """ Input types are just like types, but used as args """
  input BeerInput {
    type: String
    style: String
  }

  type Query {
    users: [User]!
    user(id: String!): User
    beers(input: BeerInput): [Beer]!
  }`

module.exports = typeDefs