import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
// import bcrypt from 'bcrypt'

function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // bcrypt.hash(password, 10, function(err, hash) {
    //   console.log('hash', hash)
    // })
  }

  return (
    <Form className="login" onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="usernameBox" hidden>Username</Label>
        <Input type="text" name="username" id="usernameBox" placeholder="username" />
      </FormGroup>
      <FormGroup>
        <Label for="passwordBox" hidden>Password</Label>
        <Input type="password" name="password" id="passwordBox" placeholder="password" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default Login
