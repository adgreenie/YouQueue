import React, { useState, useContext } from "react"
import { AppContext } from "../App"
import { Link } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { createPost } from "../services/api-helper"

function ShareForm() {
  const app = useContext(AppContext)
  const [videoURL, setVideoURL] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

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
        <Label for="urlBox" hidden>
          Username
        </Label>
        <Input
          type="text"
          name="url"
          id="urlBox"
          placeholder="YouTube URL"
          onChange={(e) => setVideoURL(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="messageBox" hidden>
          Message
        </Label>
        <Input
          type="textarea"
          name="message"
          id="messageBox"
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormGroup>
      <Button>Send</Button>
      <p style={{ color: "red" }}>{error}</p>
    </Form>
  )
}

export default ShareForm
