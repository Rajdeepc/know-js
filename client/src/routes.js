import React from 'react'
import { Route, Switch } from "react-router-dom";

import Home from "./views/Home/Home.component";
import Profile from "./views/Profile/Profile.component";
import Error from "./views/Error/Error.component";
const Routes = () => (
  <>
     <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/profile" component={Profile}>
        </Route>
        <Route component={Error} />
      </Switch>
  </>
)


export default Routes;
