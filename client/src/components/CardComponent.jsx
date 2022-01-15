import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";

const CardComponent = ({ cardImage = "/images/redux-woods.jpg", cardName = "CARD TITLE", cardBodySubtitle = "Default description" }) => {
  return (
    <Card className="mb-5 mb-md-0">
      <CardImg src={baseUrl + cardImage} alt={cardName} />
      <CardBody>
        <CardTitle tag="h3">{cardName}</CardTitle>
        <CardSubtitle tag="h4" className="mb-2 text-muted">
          {cardBodySubtitle}
        </CardSubtitle>
        <CardText>{cardDescription}</CardText>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
