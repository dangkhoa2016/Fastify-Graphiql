"use strict";

module.exports = `
    type usersType {
        id: ID
        first_name: String
    }
    type Query {
        users(search: String): [usersType]
        tasks(search: String): [tasksType]
    }

    type tasksType {
        id: ID
        title: String
        description: String
        user_id: String
    }
`;
