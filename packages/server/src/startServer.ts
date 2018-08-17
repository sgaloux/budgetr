import { ApolloEngine } from "apollo-engine";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import "reflect-metadata";
import { createTypeormConnection } from "./utils/createTypeormConnection";
import { generateSchema } from "./utils/generateSchema";

const isTesting = process.env.NODE_ENV === "test";
const port = process.env.SERVER_PORT || 4000;

export async function startServer() {
  const server = new ApolloServer({
    cacheControl: true,
    context: () => ({}),
    schema: generateSchema(),
    tracing: true,
  });

  const app = express();

  server.applyMiddleware({ app });

  const engine = new ApolloEngine({
    apiKey: "service:budgetr-server:KWW8xRcqnj7pFceNFrm9Pg",
  });

  await createTypeormConnection();

  await engine.listen({
    expressApp: app,
    port: isTesting ? 0 : port,
  });

  // tslint:disable-next-line:no-console
  console.log(`Server is running on port ${port}`);
  return engine;
}
