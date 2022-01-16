import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";

const CardComponent = ({ price, handleClick, outline }) => {
  console.log("Price logged here:", price);

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
        <Button color="primary" onClick={handleClick}>
          Sign Up
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
