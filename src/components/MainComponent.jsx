import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

const Main = () => {
  const HomePage = () => {
    return <Home />;
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(Main);
