import { types } from "mobx-state-tree";
import { v4 } from "uuid";
import packageJson from "../../package.json";

export const RootStore = types
  .model("RootStore", {
    version: types.optional(types.string, packageJson.version),
    text: ""
  })
  .actions(self => {
    return {
      changeText() {
        self.text = v4();
      }
    };
  });
