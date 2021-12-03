import React, { useState } from "react";
import { Button, Checkbox, Container, Form, Message } from "semantic-ui-react";

const Login = () => {
  const [authed, setAuthed] = useState(0);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    //only the user with this username and passwod will be redirected to the next page 
    if (name === "user" && password === "123456") {

        window.location.href = "/home"
    } else {
      //we use set authed and set authed to print the message if it is not authorized

      setAuthed(1);
    }
  };
  return (
    <Container style={{ marginTop: "5%", width: "50%" }}>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Field>

        <Button type="submit" onClick={submit}>
          Submit
        </Button>
        {/*this is called ternary operater its same as if else so if condition is true it will print the message else it willl do nothing*/}
        {(authed===1) ? (
            <h5 style={{color:"red"}}>Not Authorized</h5>
        
        ) :null}
      </Form>
    </Container>
  );
};

export default Login;
