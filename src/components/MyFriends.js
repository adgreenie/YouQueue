import React, { useContext } from "react"
import { AppContext } from "../App"

function MyFriends() {
  const app = useContext(AppContext)

  return <>{app.activeUser}'s Friends</>
}

export default MyFriends
