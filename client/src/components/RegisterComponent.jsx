import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from "reactstrap";
import { Link } from "react-router-dom";
import { Fade, Stagger } from "react-animation-components";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function Register(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
          <h2>About Us</h2>
          <hr />
        </div>
      </div>
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
      </div>
    </div>
  );
}

export default Register;
