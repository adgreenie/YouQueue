import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import bcrypt from "bcryptjs";
import { getUserByUsername } from "../services/api-helper";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await getUserByUsername(username);
    bcrypt.compare(password, user.password, function (err, res) {
      res ? props.setActiveUsername(username) : setPassword('')
    });
  };

  return (
    <Form className="login" onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="usernameBox" hidden>
          Username
        </Label>
        <Input
          type="text"
          name="username"
          id="usernameBox"
          placeholder="username"
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
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Login;
