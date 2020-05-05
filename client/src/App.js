import React from "react";
import Routes from "./routes.js";

import NavbarComponent from "./components/Navbar/Navbar";
import { withRouter } from "react-router-dom";

const App = ({ location }) => {
  return (
    <div>
      {location.pathname !== '/login' &&  <NavbarComponent />}
      <Routes />
    </div>
  );
}

export default withRouter(App);
