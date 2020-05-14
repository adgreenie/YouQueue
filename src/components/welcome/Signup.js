import React, { useState, useContext } from "react"
import { AppContext } from "../../App"
import { Link } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import bcrypt from "bcryptjs"
import { createUser, getUsernameExists } from "../../services/api-helper"

function Signup() {
  const app = useContext(AppContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState("")

  const checkValidity = async () => {
    if (username.length < 3 || username.length > 16) {
      setError("Username must be 3-16 characters long")
    } else if (!username.match(/^[0-9a-zA-Z]+$/)) {
      setError("Username can only contain letters and numbers")
    } else if (await getUsernameExists(username)) {
      setError("Username is taken...please select another")
    } else if (password.length < 5 || password.length > 18) {
      setError("Password must be 5-18 characters long")
    } else if (password !== confirm) {
      setError("Passwords do not match")
    } else {
      return true
    }
    return false
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (await checkValidity()) {
      bcrypt.hash(password, 10, function (err, hash) {
        createUser({
          username: username,
          password: hash,
        })
      })
      app.storeUser(username)
    }
  }

  return (
    <Form className="yq-form" onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="usernameBox" hidden>
          Username
        </Label>
        <Input
          type="text"
          name="username"
          id="usernameBox"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="passwordBox" hidden>
          Password
        </Label>
        <Input
          type="password"
          name="password"
          id="passwordBox"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </FormGroup>
      <FormGroup>
        <Label for="confirmBox" hidden>
          Confirm Password
        </Label>
        <Input
          type="password"
          name="confirm"
          id="confirmBox"
          placeholder="Confirm Password"
          onChange={(e) => setConfirm(e.target.value)}
          value={confirm}
        />
      </FormGroup>
      <Button>Sign Up</Button>
      <p style={{ color: "red" }}>{error}</p>
      <p>
        Already have an account? <Link to="/login">Log in here!</Link>
      </p>
    </Form>
  )
}

export default Signup
