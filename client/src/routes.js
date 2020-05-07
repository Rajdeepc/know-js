import React from 'react'
import { Route, Switch } from "react-router-dom";

import Home from "./views/Home/Home.component";
import Profile from "./views/Profile/Profile.component";
import Error from "./views/Error/Error.component";
import VideoPage from "./views/VideoPage/VideoPage.component";
import QuizPage from "./views/QuizPage/QuizPage.component";



const Routes = () => (
  <>
     <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/profile" component={Profile}/>
        <Route path="/videos" component={VideoPage}/>
        <Route path="/quiz" component={QuizPage}/>
        <Route component={Error} />
      </Switch>
  </>
)


export default Routes;
