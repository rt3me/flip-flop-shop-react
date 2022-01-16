import React, { useContext } from "react";
import { UserContext } from "../context";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

const CardComponent = ({ price, handleSubscription, outline }) => {
  const [state] = useContext(UserContext);

  console.log("Price logged here:", price);

  const buttonText = () => {
    return state && state.token ? "Subscribe" : "Sign Up";
  };

  return (
    <div className="col-md">
      <Card className={outline ? "mb-5 mb-md-0" : "mb-5 mb-md-0 border-0"}>
        <CardImg src={price.image} alt={price.nickname} className="w-50 m-auto" />
        <CardBody>
          <CardTitle tag="h3">{price.nickname}</CardTitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted">
            {(price.unit_amount / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
            <small className="text-muted fw-light">/mo</small>
          </CardSubtitle>
          <Link to="/register">
            <Button color="primary" /* onClick={() => handleSubscription(price)} */>{buttonText()}</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;
