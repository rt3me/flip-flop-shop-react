import React, { useEffect, useState } from "react";
import axios from "axios";
import PageSectionLayout from "./PageSectionLayout";
import PriceCardComponent from "./PriceCardComponent";

function Home(props) {
  const [prices, setPrices] = useState([]);

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

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Plan clicked");
  };

  return (
    <React.Fragment>
      <PageSectionLayout sectionTitle={"Check out our plans"} sectionSubtitle={"Choose the plan that gives you just the right amount of flip flop!"}>
        {prices &&
          prices.map((price) => (
            <div key={price.id} className="col-md">
              <PriceCardComponent price={price} handleClick={handleClick} />
            </div>
          ))}
      </PageSectionLayout>
    </React.Fragment>
  );
}

export default Home;
