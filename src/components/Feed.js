import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import QueueItem from "./QueueItem"
import { getPostsForUser } from "../services/api-helper"

function Feed() {
  const app = useContext(AppContext)
  const [postArr, setPostArr] = useState([])

  useEffect(() => {
    const makeApiCall = async () => {
      setPostArr(await getPostsForUser(app.activeUser))
    }
    makeApiCall()
  }, [])

  const posts = postArr.map((post, i) => {
    return <QueueItem key={i} post={post} />
  })

  return <div className="feed">{posts}</div>
}

export default Feed
