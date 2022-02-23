import React, { useState, useContext } from "react";
import { Form, InputGroup, InputGroupText, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { UserContext } from "../context";
import PageSectionLayout from "./PageSectionLayout";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setState] = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    // console.log(name, email, password);
    try {
      e.preventDefault();
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      console.log("data:", data);

      if (data.error) {
        toast.error(data.error);
      } else {
        setName("");
        setEmail("");
        setPassword("");
        setState(data);
        toast.success(`Hello, ${data.user.name}. Thanks for joining!`);
        localStorage.setItem("auth", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid page-heading-section bg-light">
        <div className="container">
          <div className="row py-5 text-center">
            <h1 className="display-4 fw-bold">Register</h1>
            <p className="lead">Time for some flip floppin' fun!</p>
          </div>
        </div>
      </div>

      <PageSectionLayout>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
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
            </div>
          </div>
        </div>
      </PageSectionLayout>
    </React.Fragment>
  );
};

export default Register;
