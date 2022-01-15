import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";

const CardComponent = ({ cardImage = "/images/redux-woods.jpg", cardBodyTitle = "Frugal", cardBodySubtitle = "$10/mo", cardBodyText, buttonText = "Sign Up", outline }) => {
  return (
    <Card className="mb-5 mb-md-0">
      <CardImg src={baseUrl + cardImage} alt={cardBodyTitle} />
      <CardBody>
        <CardTitle tag="h3">{cardBodyTitle}</CardTitle>
        <CardSubtitle tag="h4" className="mb-2 text-muted">
          {cardBodySubtitle}
        </CardSubtitle>
        <CardText>{cardBodyText}</CardText>
        <Button color="primary">{buttonText}</Button>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
