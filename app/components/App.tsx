import * as React from "react";
import { RootStore } from "../store/RootStore";
import { inject, observer } from "mobx-react";
import { mapStore } from "../store/mapStore";

interface IAppProps {
  RootStore?: typeof RootStore.Type;
}

@inject(
  mapStore(root => ({
    RootStore: root
  }))
)
@observer
class App extends React.Component<IAppProps> {
  public render() {
    const rootStore = this.props.RootStore!;
    return (
      <div>
        Application version is {rootStore.version}
        <div>
          <button onClick={rootStore.changeText}>Change Text ?</button>
        </div>
        <p>Text is : {rootStore.text}</p>
      </div>
    );
  }
}

export default App;
