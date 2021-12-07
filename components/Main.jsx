import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { postComment, fetchCampsites, fetchComments, fetchPromotions, fetchPartners, postFeedback } from "../redux/ActionCreators";

class Main extends Component {
  componentDidMount() {
    this.props.fetchCampsites();
    this.props.fetchComments();
    this.props.fetchPromotions();
    this.props.fetchPartners();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          campsite={this.props.campsites.campsites.filter((campsite) => campsite.featured)[0]}
          campsitesLoading={this.props.campsites.isLoading}
          campsitesErrMess={this.props.campsites.errMess}
          promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
          promotionLoading={this.props.promotions.isLoading}
          promotionErrMess={this.props.promotions.errMess}
          partner={this.props.partners.partners.filter((partner) => partner.featured)[0]}
          partnerLoading={this.props.partners.isLoading}
          partnerErrMess={this.props.partners.errMess}
        />
      );
    };

    const CampsiteWithId = ({ match }) => {
      return (
        <CampsiteInfo
          campsite={this.props.campsites.campsites.filter((campsite) => campsite.id === +match.params.campsiteId)[0]}
          isLoading={this.props.campsites.isLoading}
          errMess={this.props.campsites.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.campsiteId === +match.params.campsiteId)}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/directory" render={() => <Directory campsites={this.props.campsites} />} />
              <Route path="/directory/:campsiteId" component={CampsiteWithId} />
              <Route exact path="/contact" render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
              <Route exact path="/about" render={() => <About partners={this.props.partners} isLoading={this.props.partners.isLoading} ErrMess={this.props.partners.errMess} />} />
              <Redirect to="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
