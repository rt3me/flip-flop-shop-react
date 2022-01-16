import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageSectionLayout from "./PageSectionLayout";
import PriceCardComponent from "./PriceCardComponent";

function Home(props) {
  const [state, setState] = useContext(UserContext);
  const [prices, setPrices] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get("/prices");
    // console.log("Prices get request:", data);
    setPrices(
      data
        .sort((a, b) => a.unit_amount - b.unit_amount)
        .map((price) => {
          let imageURL = "";
          switch (price.nickname) {
            case "Frugal":
              imageURL = "../../images/flip-flop-frugal.svg";
              break;
            case "Fun Loving":
              imageURL = "../../images/flip-flop-fun-loving.svg";
              break;
            case "Fancy Pants":
              imageURL = "../../images/flip-flop-fancy-pants.svg";
              break;
            default:
          }
          return { ...price, image: imageURL };
        })
    );
  };

  const handleClick = async (e, price) => {
    e.preventDefault();
    // console.log("Plan clicked, price.id:", price.id);
    if (state && state.token) {
      const { data } = await axios.post("/create-subscription", {
        priceId: price.id,
      });
      window.open(data);
    } else {
      navigate("/register");
    }
  };

  return (
    <React.Fragment>
      <PageSectionLayout sectionTitle={"Check out our plans"} sectionSubtitle={"Choose the plan that gives you just the right amount of flip flop!"}>
        {prices &&
          prices.map((price) => (
            <div key={price.id} className="col-md">
              <PriceCardComponent price={price} handleSubscription={handleClick} />
            </div>
          ))}
      </PageSectionLayout>
    </React.Fragment>
  );
}

export default Home;
