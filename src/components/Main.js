import React from "react"
import Home from "./Home"
import Search from "./Search"
import User from "./User"
import { Route, Switch, Redirect } from "react-router-dom"

function Main() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/search" component={Search} />
      <Route
        path="/user/:username"
        render={(routerProps) => <User {...routerProps} />}
      />
      <Redirect to="/home" />
    </Switch>
  )
}

export default Main
