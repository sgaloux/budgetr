import * as fs from "fs";
import * as glob from "glob";
import { makeExecutableSchema } from "graphql-tools";
import { mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import * as path from "path";

export function generateSchema() {
  const pathToModules = path.join(__dirname, "../modules");
  const gqlTypes = glob
    .sync(`${pathToModules}/**/*.graphql`)
    .map((file) => fs.readFileSync(file, { encoding: "utf8" }));

  const resolvers = glob
    .sync(`${pathToModules}/**/*.resolvers.?s`)
    .map((resolver) => require(resolver).resolvers);

  return makeExecutableSchema({
    typeDefs: mergeTypes(gqlTypes),
    resolvers: mergeResolvers(resolvers),
  });
}
