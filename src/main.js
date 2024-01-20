"use strict";

const fastify = require("fastify")();
const cors = require("@fastify/cors");
const mercurius = require("mercurius");
const schema = require("./graph/schema");
const resolvers = require("./graph/resolvers");

fastify.register(cors, {
  // put your options here
});

fastify.register(mercurius, {
  schema,
  resolvers,
  context: (ctx) => {
    console.log('ctx', ctx.body);
    console.log('ctx.headers.authorization', ctx.headers.authorization);
    ctx.test = { date: new Date(), num: 3 };
    return ctx;
  },
  graphiql: true,
});


fastify.get('/', async function (req, reply) {
  const query = '{ users { id first_name } }'
  return reply.graphql(query);
})

fastify.listen({
  port: 3001,
}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server ready at ${address}. Lets play 🏓`);
});
