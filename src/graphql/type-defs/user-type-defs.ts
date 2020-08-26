import {gql} from 'apollo-server-express'

export default gql`
    extend type Query {
        users: [User!]!
        user(id: ID!): User
    }

    extend type Mutation {
        signUp(username:String!, password:String!, name:String!): User
    }

    type User {
        id: ID!
        username: String!
        name: String!
        createdAt: String
    }
`