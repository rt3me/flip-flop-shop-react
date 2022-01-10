import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, Form, InputGroup, InputGroupText, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log(name, email, password);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Register</BreadcrumbItem>
          </Breadcrumb>
          <h2>Register</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Let's Get Started</h3>
          <p>Sign up for free. No credit card required.</p>
          <Form>
            <InputGroup>
              <InputGroupText>Name</InputGroupText>
              <Input type="text" onChange={(e) => setName(e.target.value)} value={name} id="nameInput" name="name" placeholder="name" />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupText>Email</InputGroupText>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} value={email} id="emailInput" name="email" placeholder="user@email.com" />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupText>Password</InputGroupText>
              <Input type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="passwordInput" name="password" placeholder="password" />
            </InputGroup>
            <br />
            <Button onClick={handleClick} color="primary">
              Register
            </Button>
          </Form>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <pre>{JSON.stringify({ name, email, password }, null, 4)}</pre>
        </div>
      </div>
    </div>
  );
};

export default Register;
