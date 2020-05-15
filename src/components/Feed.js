import React, { useContext } from "react"
import { AppContext } from "../App"
import QueueItem from "./QueueItem"
import { getPostsForUser } from "../services/api-helper"

function Feed() {
  const app = useContext(AppContext)

  return <>{app.activeUser}'s Feed</>
}

export default Feed
