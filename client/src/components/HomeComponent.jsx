import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

const CardComponent = ({ cardImage = "/images/redux-woods.jpg", cardName = "BASIC", cardDescription = "Default description" }) => {
  return (
    <Card>
      <CardImg src={baseUrl + cardImage} alt={cardName} />
      <CardBody>
        <CardTitle>{cardName}</CardTitle>
        <CardText>{cardDescription}</CardText>
      </CardBody>
    </Card>
  );
};

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return <h4>{errMess}</h4>;
  }
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.5) translateY(50%)",
      }}
    >
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

function Home(props) {
  return (
    <React.Fragment>
      <PageSectionLayout sectionTitle={"Check out our plans"} sectionSubtitle={"Choose the plan that gives you just the right amount of flip flop!"}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </PageSectionLayout>
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
    </React.Fragment>
  );
}

export default Home;
