import React from "react"

function QueueItem({ post }) {
  return (
    <div className="queue-item">
      <h3>
        {post.sender} -> {post.recipient}
      </h3>
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
