import { gql } from 'graphql-tag';

const UserType = gql`
    type User {
        id: String!
        name: String!
        surname: String!
        email: String!
        dpi: String
        nit: String 
        phone: String
    }   

    type UserPage {
        rows: [User]
        length: Int
        pages: Int
    }

    type Query {
        user(id: String!): User
        users(page: Int, limit: Int): UserPage
    }

    input UserInput {
        name: String!
        surname: String!
        email: String!
        dpi: String
        nit: String 
        phone: String
    }

    type Mutation {
        createUser(input: UserInput!): User
        #updateUser(id: String!, input: UserInput!): User
        #deleteUser(id: String!): User
    }
`;


export { UserType };