import React from 'react'
import { Route, Switch } from "react-router-dom";

import Home from "./views/Home/Home.component";
import Profile from "./views/Profile/Profile.component";
import Error from "./views/Error/Error.component";
import VideoPage from "./views/VideoPage/VideoPage.component";
import QuizPage from "./views/QuizPage/QuizPage.component";
import Categories from "./views/Categories/Categories.component";



const Routes = () => (
  <>
     <Switch>
        <Route path="/" component={Categories} exact />
        <Route path="/profile" component={Profile}/>
        <Route path="/videos" component={VideoPage}/>
        <Route path="/trending" component={QuizPage}/>
        <Route path="/:category" component={Categories}/>
        <Route component={Error} />
      </Switch>
  </>
)


export default Routes;
