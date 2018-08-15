import "reflect-metadata";
import { generateSchema } from "./utils/generateSchema";
import { createTypeormConnection } from "./utils/createTypeormConnection";
import { ApolloServer } from "apollo-server";

const isTesting = process.env.NODE_ENV === "test";
const port = process.env.SERVER_PORT || 4000;

export async function startServer() {
  const server = new ApolloServer({
    schema: generateSchema(),
    context: () => ({})
  });

  const app = await server.listen({
    port: isTesting ? 0 : port
  });

  await createTypeormConnection();

  console.log(`Server is running on ${app.url}`);
  return app;
}
