import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import { Link } from "react-router-dom"
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

  console.log(posts)

  return (
    <div className="feed">
      {posts.length < 1 && (
        <>
          <h3>Crikey! Looks like your feed is empty...</h3>
          <Link to="/share">Share with friends and start your playlist!</Link>
        </>
      )}
      {posts}
    </div>
  )
}

export default Feed
