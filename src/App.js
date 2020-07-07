import React, {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import {Provider} from "mobx-react";
import stores from "./stores";
import Routes from "./Routes";

class App extends Component {


  render() {

    return (
      <div>

        <Provider
          {...stores}
        >
          <Routes/>
        </Provider>
      </div>
    );
  }
}

export default App;
