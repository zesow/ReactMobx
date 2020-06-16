import React from 'react';
import { Route } from 'react-router-dom';

import ItemListContainer from './container/ItemListContainer';
import RouteGroup from "../etc/RouteGroup";
// import Item from './container/ItemContainer';

const Routes = () => (
  <RouteGroup basename="/items">
      <Route exact render = {(props) => <ItemListContainer {...props} />} />
  </RouteGroup>
);

export default Routes;
