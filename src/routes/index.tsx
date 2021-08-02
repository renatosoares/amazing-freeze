import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "routes/home";
import PostDetail from "routes/postDetail";
import Error404 from "routes/error404";

const AppRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/:slang">
      <PostDetail />
    </Route>
    <Route path="*" />
    <Route>
      <Error404 />
    </Route>
  </Switch>
);

export default AppRoutes;
