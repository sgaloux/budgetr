require("dotenv/config");

module.exports = {
  schemas: {
    server: {
      endpoint: "http://localhost:4000/graphql",
      engineKey: process.env.APOLLO_ENGINE_KEY,
    },
  },
};
