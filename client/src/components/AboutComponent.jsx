import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

function About() {
  return (
    <React.Fragment>
      <div className="container-fluid page-heading-section bg-light">
        <div className="container">
          <div className="row py-5 text-center">
            <h1 className="display-4 fw-bold">About Us</h1>
            <p className="lead">Get the skinny on us</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row row-content">
          <div className="col-sm-6">
            <h3>Our Mission</h3>
            <p>
              We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert
              wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
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
                  <dd className="col-6">February 3, 2016</dd>
                  <dt className="col-6">No. of Campsites in 2019</dt>
                  <dd className="col-6">563</dd>
                  <dt className="col-6">No. of Reviews in 2019</dt>
                  <dd className="col-6">4388</dd>
                  <dt className="col-6">Employees</dt>
                  <dd className="col-6">42</dd>
                </dl>
              </CardBody>
            </Card>
          </div>
          <div className="col">
            <Card className="mt-3 bg-light">
              <CardBody>
                <blockquote className="blockquote">
                  <p className="mb-0">I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.</p>
                  <footer className="blockquote-footer">
                    Muriel Strode, <cite title="Source Title">"Wind-Wafted Wild Flowers" - The Open Court, 1903</cite>
                  </footer>
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
