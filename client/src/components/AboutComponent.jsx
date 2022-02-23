import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

function About() {
  return (
    <React.Fragment>
      <div className="container-fluid page-heading-section bg-light">
        <div className="container">
          <div className="row py-5 text-center">
            <h1 className="display-4 fw-bold">About Us</h1>
            <p className="lead">Get the skinny</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row row-content">
          <div className="col-sm-6">
            <h3>Our Mission</h3>
            <p>
              We could ramble on all day about the benefits flip flops provide to society. Instead, we would like to present our argument for not using a hyphen in the word "flip flop". According to{" "}
              <a href="https://minnesota.publicradio.org/radio/podcasts/grammar_grater/archive/2007/12/06/">Minnesota Public Radio</a>, "Flip-flop is in a family of words that are created by reduplication: that is, the repetition of the same or
              similar sound. Other words in this family include knick-knack, hodge-podge, shilly-shally and hoity-toity. Like flip-flop, these words are often hyphenated." We simply say, no. Not today. Because... flip flops.
            </p>
          </div>
          <div className="col-sm-6">
            <Card>
              <CardHeader className="text-white bg-primary">
                <h3>Facts At a Glance</h3>
              </CardHeader>
              <CardBody>
                <dl className="row">
                  <dt className="col-6">Founded</dt>
                  <dd className="col-6">February 22, 2022</dd>
                  <dt className="col-6">Flip Flops In Existence</dt>
                  <dd className="col-6">42</dd>
                  <dt className="col-6">Flip Flops Worn Now</dt>
                  <dd className="col-6">11'dy 7</dd>
                  <dt className="col-6">Toes Freed By Flip Flops</dt>
                  <dd className="col-6">Millions</dd>
                </dl>
              </CardBody>
            </Card>
          </div>
          <div className="col">
            <Card className="mt-3 bg-light">
              <CardBody>
                <blockquote className="blockquote">
                  <p className="mb-0">I love living my life in flip-flops. I met a guy in the islands a while ago who told me he hadn't worn a pair of shoes in three years! I thought, 'Man, that's the life!'.</p>
                  <div className="blockquote-footer">
                    Kenny Chesney, <cite title="Source Title">Somewhere, some time...</cite>
                  </div>
                </blockquote>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
