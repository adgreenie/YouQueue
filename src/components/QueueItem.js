import React from "react"
import { formatDate } from "../services/formatDate"

function QueueItem({ post }) {
  console.log(post.date)
  const dateTime = formatDate(post.date)

  return (
    <div className="queue-item">
      <h3>
        {post.sender} -> {post.recipient}
      </h3>
      <p>
        {dateTime[0]} | {dateTime[1]}
      </p>
      <iframe
        style={{ margin: "0 auto" }}
        width="300"
        src={`https://www.youtube.com/embed/${post.video}?feature=oembed`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      />
      <p>{post.message}</p>
    </div>
  )
}

export default QueueItem
