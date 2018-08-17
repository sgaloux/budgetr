import { RootStore } from "./RootStore";

export const mapStore = (
  func: (root: typeof RootStore.Type) => object
) => (stores: { store: typeof RootStore.Type }) => {
  return func(stores.store);
};
