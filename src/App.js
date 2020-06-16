import React from 'react';

import { Provider } from "mobx-react";
import stores from "./stores";
import Routes from "./Routes";

const App =() => {
  return (
    <div>

      <Provider
        {...stores}
      >
        <Routes/>
      </Provider>
    </div>
  );
};

export default App;
