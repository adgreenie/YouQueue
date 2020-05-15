import React, { useState, useContext } from "react"
import { AppContext } from "../../App"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { Link } from "react-router-dom"
import bcrypt from "bcryptjs"
import { getUserByUsername, getUsernameExists } from "../../services/api-helper"

function Login() {
  const app = useContext(AppContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isInvalid, setIsInvalid] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password && (await getUsernameExists(username))) {
      const user = await getUserByUsername(username)
      bcrypt.compare(password, user.password, function (err, res) {
        res ? app.storeUser(user.username) : handleInvalid()
      })
    } else {
      handleInvalid()
    }
  }

  const handleInvalid = () => {
    setIsInvalid(true)
    setPassword("")
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
      <Button>Log In</Button>
      {isInvalid && (
        <p className="error">Invalid username and password combination</p>
      )}
      <p>
        Don't have an account? <Link to="/signup">Click here to sign up!</Link>
      </p>
    </Form>
  )
}

export default Login
