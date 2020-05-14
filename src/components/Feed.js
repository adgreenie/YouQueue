import React, { useContext } from "react"
import { AppContext } from "../App"

function Feed() {
  const app = useContext(AppContext)

  return <>{app.activeUser}'s Feed</>
}

export default Feed
