"use strict";

const fastify = require("fastify")();
const cors = require("fastify-cors");
const mercurius = require("mercurius");
const schema = require("./graph/schema");
const resolvers = require("./graph/resolvers");

fastify.register(cors, {
  // put your options here
});

fastify.register(mercurius, {
  schema,
  resolvers,
  context: ({ req }: { req: any }) => {
    console.log(req.headers.authorization);
  },
  graphiql: "playground",
});

fastify.listen(3000, (err: any, address: string) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server ready at ${address}. Lets play 🏓`);
});
