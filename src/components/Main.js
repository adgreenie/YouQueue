import React from "react"
import Home from "./Home"
import Feed from "./Feed"
import ShareForm from "./ShareForm"
import Settings from "./Settings"
import { Route, Switch, Redirect } from "react-router-dom"

function Main() {
  return (
    <main>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/feed" component={Feed} />
        <Route path="/share" component={ShareForm} />
        <Route path="/settings" component={Settings} />
        <Redirect to="/home" />
      </Switch>
    </main>
  )
}

export default Main
