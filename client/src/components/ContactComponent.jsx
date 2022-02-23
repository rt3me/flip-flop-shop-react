import React, { useState } from "react";
import { Form, InputGroup, InputGroupText, Input, Button } from "reactstrap";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      setName("");
      setEmail("");
      setMessage("");
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
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p className="lead">Get in touch so we can talk flip flops!</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Form>
              <InputGroup>
                <InputGroupText>Name</InputGroupText>
                <Input type="text" onChange={(e) => setEmail(e.target.value)} value={name} id="nameInput" name="name" placeholder="Your name" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupText>Email</InputGroupText>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} value={email} id="emailInput" name="email" placeholder="user@email.com" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupText>Message</InputGroupText>
                <Input type="textarea" onChange={(e) => setMessage(e.target.value)} value={message} id="messageInput" name="message" placeholder="Message" />
              </InputGroup>
              <br />
              <Button onClick={handleClick} color="primary">
                Submit
              </Button>
            </Form>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
