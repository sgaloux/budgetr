import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { generateSchema } from "./utils/generateSchema";
import { createTypeormConnection } from "./utils/createTypeormConnection";

const isTesting = process.env.NODE_ENV === "test";
const port = process.env.SERVER_PORT || 4000;

export async function startServer() {
  const server = new GraphQLServer({
    schema: generateSchema(),
    context: () => ({})
  });

  const app = await server.start({
    port: isTesting ? 0 : port
  });

  await createTypeormConnection();

  console.log(`Server is running on port ${port}`);
  return app;
}
