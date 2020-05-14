import React, { useState, useContext } from "react"
import { AppContext } from "../App"
import { Link } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { createPost, checkURL } from "../services/api-helper"

function ShareForm() {
  const app = useContext(AppContext)
  const [recipient, setRecipient] = useState("")
  const [videoURL, setVideoURL] = useState("")
  const [videoCode, setVideoCode] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleVideoURL = async (url) => {
    if (url.includes("v=") && (await checkURL(url))) {
      setVideoCode(url.split("v=")[1].split("&")[0])
    } else {
      console.log("invalid url")
    }
    // var ampersandPosition = video_id.indexOf("&")
    // if (ampersandPosition != -1) {
    //   video_id = video_id.substring(0, ampersandPosition)
    // }
  }

  const checkValidity = async () => {
    // check YouTube link
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (checkValidity()) {
      // create Post
    }
  }

  return (
    <Form className="yq-form" onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="recipientBox">Who would you like to share with?</Label>
        <Input
          type="text"
          name="username"
          id="usernameBox"
          placeholder="Username"
          onChange={(e) => setRecipient(e.target.value)}
        />
      </FormGroup>
      {videoCode ? (
        <iframe
          style={{ margin: "0 auto" }}
          width="300"
          src={`https://www.youtube.com/embed/${videoCode}?feature=oembed`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        />
      ) : (
        <FormGroup>
          <Label for="urlBox">Copy YouTube URL and paste it below:</Label>
          <Input
            type="text"
            name="url"
            id="urlBox"
            placeholder="YouTube URL"
            onChange={(e) => handleVideoURL(e.target.value)}
          />
        </FormGroup>
      )}
      <FormGroup>
        <Label for="messageBox">Share a message with this video:</Label>
        <Input
          type="textarea"
          name="message"
          id="messageBox"
          placeholder="Message (optional)"
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormGroup>
      <Button>Send</Button>
      <p style={{ color: "red" }}>{error}</p>
    </Form>
  )
}

export default ShareForm
