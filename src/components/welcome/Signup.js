import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import bcrypt from "bcryptjs";
import { createUser, getUsernameExists } from "../../services/api-helper";

function Signup() {
  const app = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const checkValidity = async () => {
    const isTaken = await getUsernameExists(username);
    if (isTaken) {
      setError("Username is taken...please select another");
    } else if (username.length < 3) {
      setError("Username must be at least 3 characters long");
    } else if (password.length < 5) {
      setError("Password must be at least 5 characters long");
    } else if (password !== confirm) {
      setError("Passwords do not match");
    } else {
      return true;
    }
    return false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await checkValidity()) {
      bcrypt.hash(password, 10, function (err, hash) {
        createUser({
          username: username,
          password: hash
        });
      });
      app.setActiveUsername(username)
    }
  }

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
      <FormGroup>
        <Label for="confirmBox" hidden>
          Confirm Password
        </Label>
        <Input
          type="password"
          name="confirm"
          id="confirmBox"
          placeholder="confirm password"
          onChange={(e) => setConfirm(e.target.value)}
          value={confirm}
        />
      </FormGroup>
      <Button>Sign Up</Button>
      <p style={{color: 'red'}}>{error}</p>
      <p>
        Already have an account? <Link to="/login">Log in here!</Link>
      </p>
    </Form>
  )
}

export default Signup;
