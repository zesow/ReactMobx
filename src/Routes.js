import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import {Routes as ItemList} from './item';
import {Routes as Lol} from './lol';
import context from "./etc/context";


const contextPath = context.path();
console.log(contextPath);

const Routes = () => (
  <BrowserRouter basename={contextPath}>
    <Switch>
      <Route path="/lol" render={() => <Lol/>} />
      <Route path="/items" render={() => <ItemList/>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
