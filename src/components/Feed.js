import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import { Link } from "react-router-dom"
import QueueItem from "./QueueItem"
import { getPostsForUser } from "../services/api-helper"
import GridLoader from "react-spinners/GridLoader"

function Feed() {
  const app = useContext(AppContext)
  const [postArr, setPostArr] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const makeApiCall = async () => {
      setPostArr(await getPostsForUser(app.activeUser))
      setIsLoading(false)
    }
    makeApiCall()
  }, [])

  const posts = postArr.map((post, i) => {
    return <QueueItem key={i} post={post} />
  })

  if (isLoading) {
    return (
      <div className="loading">
        <GridLoader />
      </div>
    )
  }

  return (
    <div className="feed">
      {!isLoading && posts.length < 1 && (
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
