import React, { useEffect, useState } from "react";
import axios from "axios";
import PageSectionLayout from "./PageSectionLayout";
import CardComponent from "./CardComponent";

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
        {prices && prices.map((price) => <CardComponent key={price.id} price={price} handleClick={handleClick} />)}
        <CardComponent cardImage="../../images/flip-flop-frugal.svg" cardBodyTitle="Frugal" cardBodySubtitle="$5/mo" buttonText="Sign Up" />
        <CardComponent cardImage="../../images/flip-flop-fun-loving.svg" cardBodyTitle="Fun Loving" cardBodySubtitle="$10/mo" buttonText="Sign Up" />
        <CardComponent cardImage="../../images/flip-flop-fancy-pants.svg" cardBodyTitle="Fancy Pants" cardBodySubtitle="$15/mo" buttonText="Sign Up" />
      </PageSectionLayout>
    </React.Fragment>
  );
}

export default Home;
