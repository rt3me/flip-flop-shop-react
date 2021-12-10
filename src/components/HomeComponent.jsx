import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="m-1 col-md">
          <RenderCard item={props.campsite} isLoading={props.campsitesLoading} errMess={props.campsitesErrMess} />
        </div>
        <div className="m-1 col-md">
          <RenderCard item={props.promotion} isLoading={props.promotionLoading} errMess={props.promotionErrMess} />
        </div>
        <div className="m-1 col-md">
          <RenderCard item={props.partner} isLoading={props.partnerLoading} errMess={props.partnerErrMess} />
        </div>
      </div>
    </div>
  );
}

export default Home;
