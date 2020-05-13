import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Route, Switch, Redirect } from "react-router-dom";

function Welcome() {
  return (
    <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect to="/login" />
    </Switch>
  );
}

export default Welcome;