import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "routes/home";
import PostDetail from "routes/postDetail";

const AppRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/:slang">
      <PostDetail />
    </Route>
  </Switch>
);

export default AppRoutes;
