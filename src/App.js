import React from 'react';

import { Provider } from "mobx-react";
import stores from "./stores";
import Routes from "./Routes";
import {Tab} from "semantic-ui-react";
import {Routes as Lol} from "./lol";
import {Route} from "react-router-dom";
import LolContainer from "./lol/container/LolContainer";



const App =() => {
  return (
    <div >


      <Provider
        {...stores}
      >
        <Routes/>
      </Provider>
    </div>
  );
};

export default App;
