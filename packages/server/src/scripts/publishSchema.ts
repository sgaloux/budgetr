import "dotenv/config";

import { spawn } from "child_process";
// tslint:disable-next-line:no-console
console.log(process.env.ENGINE_API_KEY);

const cmd = spawn("yarn", [
  `apollo`,
  `schema:publish`,
  `--endpoint=http://localhost:4000/graphql`,
  `--key=${process.env.ENGINE_API_KEY}`,
]);

cmd.stdout.on("data", (data) => {
  // tslint:disable-next-line:no-console
  console.log(data.toString());
});

cmd.stderr.on("data", (data) => {
  // tslint:disable-next-line:no-console
  console.log(data.toString());
});

cmd.on("exit", (code) => {
  // tslint:disable-next-line:no-console
  console.log(`Child exited with code ${code}`);
});
