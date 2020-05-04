import React from 'react'
import { Route, Switch ,Redirect} from "react-router-dom";
import { connect } from "react-redux";

import Home from "./views/Home/Home.component";
import Login from "./views/Login/Login.component";
import Profile from "./views/Profile/Profile.component";
import Error from "./views/Error/Error.component";
const Routes = (props) => (
  <main>
     <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login}>
          { props.loginResponse ? <Redirect to="/" /> : undefined }
          </Route>
        <Route path="/profile" component={Profile}>
        { !props.loginResponse ? <Redirect to="/login" /> : undefined }
        </Route>
        <Route component={Error} />
      </Switch>
  </main>
)



const mapStateToProps = (state) => ({
  loginResponse: state.LoginReducer.isLoggedIn
})

const RouterContainer = connect(mapStateToProps,{

})(Routes)

export default RouterContainer;
