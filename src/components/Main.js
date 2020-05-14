import React from "react"
import Home from "./Home"
import MyPage from "./MyPage"
import MyFriends from "./MyFriends"
import Search from "./Search"
import User from "./User"
import ShareForm from "./ShareForm"
import { Route, Switch, Redirect } from "react-router-dom"

function Main() {
  return (
    <main>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/userpage" component={MyPage} />
        <Route path="/friends" component={MyFriends} />
        <Route path="/search" component={Search} />
        <Route
          path="/user/:username"
          render={(routerProps) => <User {...routerProps} />}
        />
        <Route
          path="/share/:username"
          render={(routerProps) => <ShareForm {...routerProps} />}
        />
        <Redirect to="/home" />
      </Switch>
    </main>
  )
}

export default Main
