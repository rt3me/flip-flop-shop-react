import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";

const CardComponent = ({ cardImage = "/images/redux-woods.jpg", cardName = "CARD TITLE", cardDescription = "Default description" }) => {
  return (
    <Card className="mb-5 mb-md-0">
      <CardImg src={baseUrl + cardImage} alt={cardName} />
      <CardBody>
        <CardTitle tag="h3">{cardName}</CardTitle>
        <CardText>{cardDescription}</CardText>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
