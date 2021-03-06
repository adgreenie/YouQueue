import React, { useState, useContext } from "react"
import { AppContext } from "../App"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { getUsernameExists, createPost, checkURL } from "../services/api-helper"

function ShareForm() {
  const app = useContext(AppContext)
  const [recipient, setRecipient] = useState("")
  const [videoCode, setVideoCode] = useState("")
  const [message, setMessage] = useState("")
  const [recError, setRecError] = useState("")
  const [videoError, setVideoError] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleVideoURL = async (url) => {
    if (!url) {
      setVideoError("")
    } else if (url.includes("v=") && (await checkURL(url))) {
      setVideoCode(url.split("v=")[1].split("&")[0])
      setVideoError("")
    } else if (url.includes("youtu.be/") && (await checkURL(url))) {
      setVideoCode(url.split(".be/")[1])
      setVideoError("")
    } else {
      setVideoError("Invalid YouTube URL")
    }
  }

  const handleRecipient = async (rec) => {
    setRecipient(rec)
    console.log("recipient set")
    if (!rec) {
      setRecError("")
    } else if (await getUsernameExists(rec)) {
      setRecipient(rec)
      setRecError("")
    } else {
      setRecError(`User "${rec}" not found`)
    }
  }

  const handleSubmit = async (e) => {
    console.log("handling submit")
    e.preventDefault()
    if (
      recipient &&
      videoCode &&
      !recError &&
      !videoError &&
      message.length < 51 &&
      !isSubmitted
    ) {
      setIsSubmitted(true)
      await createPost({
        sender: app.activeUser,
        recipient: recipient,
        message: message,
        video: videoCode,
      })
      window.location.reload()
    }
  }

  return (
    <Form
      className="yq-form"
      id="share-form"
      onSubmit={handleSubmit}
      onKeyPress={(e) => {
        e.key === "Enter" && e.preventDefault()
      }}
    >
      <FormGroup>
        <Label for="toBox">Who would you like to share with?</Label>
        <Input
          type="text"
          name="recipient"
          id="toBox"
          placeholder="Username"
          onBlur={(e) => handleRecipient(e.target.value)}
        />
      </FormGroup>
      <p className="error">{recError}</p>
      {videoCode ? (
        <>
          <iframe
            style={{ margin: "0 auto" }}
            width="300"
            src={`https://www.youtube.com/embed/${videoCode}?feature=oembed`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          />
          <Button onClick={() => setVideoCode("")}>Change Video</Button>
        </>
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
      <p className="error">{videoError}</p>
      <FormGroup>
        <Label for="messageBox">Share a message with this video:</Label>
        <Input
          type="textarea"
          name="message"
          id="messageBox"
          placeholder="Message (character limit 50)"
          onChange={(e) => setMessage(e.target.value)}
        />
        <span style={{ color: message.length > 50 ? "red" : "green" }}>
          {message.length}/50
        </span>
      </FormGroup>
      <Button color="success">Send</Button>
    </Form>
  )
}

export default ShareForm
