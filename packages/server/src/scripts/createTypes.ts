import { generateNamespace } from "@gql2ts/from-schema";
import * as fs from "fs";
import * as path from "path";
import { generateSchema } from "../utils/generateSchema";

const tsTypes = generateNamespace("GQL", generateSchema());

fs.writeFile(path.join(__dirname, "../types/schema.d.ts"), tsTypes, (err) => {
  // tslint:disable-next-line:no-console
  console.log(err);
});
