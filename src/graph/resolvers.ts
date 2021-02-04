"use strict";

const models = require("../database/models/index");

module.exports = {
  Query: {
    users: async (_: any, { search }: { search: any }) => {
      return models.users.findAll();
    },
  },
};
