"use strict";
const fastify = require("fastify")();
const cors = require("fastify-cors");
const mercurius = require("mercurius");
const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
`;
fastify.register(cors, {
// put your options here
});
fastify.register(mercurius, {
    schema,
    graphiql: "playground",
});
fastify.listen(3000, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`🚀 Server ready at ${address}. Lets play 🏓`);
});
//# sourceMappingURL=main.js.map