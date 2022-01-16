import React, { useEffect, useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import axios from "axios";
import { Loading } from "./LoadingComponent";
import PageSectionLayout from "./PageSectionLayout";
import CardComponent from "./CardComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

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
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get("/prices");
    console.log("Prices get request:", data);
    setPrices(data);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Plan clicked");
  };

  return (
    <React.Fragment>
      <PageSectionLayout sectionTitle={"Check out our plans"} sectionSubtitle={"Choose the plan that gives you just the right amount of flip flop!"}>
        {prices &&
          prices
            .sort((a, b) => a.unit_amount - b.unit_amount)
            .map((price) => {
              let cardImage = "";
              switch (price.nickname) {
                case "Frugal":
                  cardImage = "../../images/flip-flop-frugal.svg";
                  break;
                case "Fun Loving":
                  cardImage = "../../images/flip-flop-fun-loving.svg";
                  break;
                case "Fancy Pants":
                  cardImage = "../../images/flip-flop-fancy-pants.svg";
                  break;
                default:
              }
              return { ...price, image: cardImage };
            })
            .map((price) => <CardComponent key={price.id} price={price} handleClick={handleClick} />)}
        <CardComponent cardImage="../../images/flip-flop-frugal.svg" cardBodyTitle="Frugal" cardBodySubtitle="$5/mo" buttonText="Sign Up" />
        <CardComponent cardImage="../../images/flip-flop-fun-loving.svg" cardBodyTitle="Fun Loving" cardBodySubtitle="$10/mo" buttonText="Sign Up" />
        <CardComponent cardImage="../../images/flip-flop-fancy-pants.svg" cardBodyTitle="Fancy Pants" cardBodySubtitle="$15/mo" buttonText="Sign Up" />
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
