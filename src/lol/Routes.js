import React from 'react';
import { Route } from 'react-router-dom';

import LolContainer from "./container/LolContainer";
import RouteGroup from "../etc/RouteGroup";

const Routes = () => (
  <RouteGroup basename="/9doc">
    <Route exact render={(props) => <LolContainer {...props} />} />
  </RouteGroup>
);

export default Routes;
