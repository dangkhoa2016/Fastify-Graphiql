"use strict";

const models = require("../models/index");

module.exports = {
  Query: {
    users: async (_, { search }, context) => {
      console.log('_', _);
      // console.log('context', context);
      console.log('test', context.test);
      console.log('search', search);

      return models.users.findAll();
    },
    tasks: async (_, { search }, context) => {
      console.log('_', _);
      // console.log('context', context);
      console.log('test', context.test);
      console.log('search', search);

      return models.tasks.findAll();
    },
  },
};
