import React, { Component } from "react";
import { Routes, Route, useLocation, useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { postComment, fetchCampsites, fetchComments, fetchPromotions, fetchPartners, postFeedback } from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Toaster } from "react-hot-toast";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Login from "./LoginComponent";
import Register from "./RegisterComponent";

const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions,
  };
};

// can be set up as a function or an object (recommended)
const mapDispatchToProps = {
  postComment: (campsiteId, rating, author, text) => postComment(campsiteId, rating, author, text),
  fetchCampsites: () => fetchCampsites(),
  resetFeedbackForm: () => actions.reset("feedbackForm"),
  fetchComments: () => fetchComments(),
  fetchPromotions: () => fetchPromotions(),
  fetchPartners: () => fetchPartners(),
  postFeedback: (newFeedback) => postFeedback(newFeedback),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchCampsites();
    this.props.fetchComments();
    this.props.fetchPromotions();
    this.props.fetchPartners();
    console.log("Props are theeeese:", this.props.partners);
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

    const AboutPage = () => {
      return <About partners={this.props.partners} isLoading={this.props.partners.isLoading} ErrMess={this.props.partners.errMess} />;
    };

    const ContactPage = () => {
      return <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />;
    };

    return (
      <div>
        <Header />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
          }}
        />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export const withRouter = (ComponentWithRouter) => (props) => {
  const location = useLocation();
  const match = { params: useParams() };
  const navigate = useNavigate();
  const history = {
    back: () => navigate(-1),
    goBack: () => navigate(-1),
    location,
    push: (url, state) => navigate(url, { state }),
    replace: (url, state) => navigate(url, { replace: true, state }),
  };
  return <ComponentWithRouter location={location} match={match} navigate={navigate} history={history} {...props} />;
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
