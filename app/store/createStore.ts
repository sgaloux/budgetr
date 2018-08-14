import { RootStore } from "./RootStore";
import makeInspectable from "mobx-devtools-mst";

export function createStore() {
  const store = RootStore.create({});
  makeInspectable(store);
  return store;
}
