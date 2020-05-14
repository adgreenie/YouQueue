import React, { useContext } from "react"
import { AppContext } from "../App"
import Feed from "./Feed"

function Home() {
  const app = useContext(AppContext)

  return (
    <>
      <h2>Welcome {app.activeUser}!</h2>
      <Feed />
    </>
  )
}

export default Home
