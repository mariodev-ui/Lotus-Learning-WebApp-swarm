const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    courses: [Course]
  }

  type Mutation {
    login(email: String!, password: String!): User
  }

  type Course {
    id: ID!
    title: String!
    description: String!
  }

  type User {
    id: ID!
    email: String!
  }
`;

module.exports = typeDefs;
