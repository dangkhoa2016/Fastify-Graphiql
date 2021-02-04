"use strict";

module.exports = `
    type usersType {
        id: ID
        first_name: String
    }
    type Query {
        users(search: String): usersType
    }
`;
