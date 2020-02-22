export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    avatar: String!
    message: String
    friends: [User]
  }

  type Query {
    user: User!
    users:[User]!
  }
`