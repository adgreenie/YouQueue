import React from "react"
import Login from "./Login"
import Signup from "./Signup"
import { Route, Switch, Redirect } from "react-router-dom"

function Switcher() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Redirect to="/login" />
    </Switch>
  )
}

export default Switcher
