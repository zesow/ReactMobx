import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
// import { context } from './src/etc/context';
// import ItemList from './container/ItemListContainer';
// import Item from './container/ItemContainer';

import { Routes as ItemList } from './item'
import context from "./item/etc/context";


const contextPath = context.path();
console.log(contextPath);

const Routes = () => (
  <BrowserRouter basename={contextPath}>
    <Switch>
      <ItemList/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
