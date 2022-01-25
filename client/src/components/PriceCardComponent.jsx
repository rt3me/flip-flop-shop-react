import React, { useContext } from "react";
import { UserContext } from "../context";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const PriceCard = ({ price, handleSubscription, outline, userSubscriptions }) => {
  const [state] = useContext(UserContext);

  const buttonText = () => {
    return state && state.token ? (userSubscriptions && userSubscriptions.includes(price.id) ? "My Plan" : "Subscribe") : "Sign Up";
  };

  return (
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
        <Button color="primary" onClick={(e) => handleSubscription(e, price)}>
          {buttonText()}
        </Button>
      </CardBody>
    </Card>
  );
};

export default PriceCard;
