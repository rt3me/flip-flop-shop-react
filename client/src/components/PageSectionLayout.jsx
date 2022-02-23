import React from "react";

const PageSectionLayout = ({ sectionTitle, sectionSubtitle, children }) => {
  return (
    <div className="page-section container-fluid d-flex justify-content-center pt-5 pb-4">
      <div className="container py-5">
        <div className="row col-md-8 offset-md-2 text-center">
          {sectionTitle ? <h2>{sectionTitle}</h2> : ""}
          {sectionSubtitle ? <p className="lead pb-4">{sectionSubtitle}</p> : ""}
        </div>
        <div className="row mb-4 text-center">{children}</div>
      </div>
    </div>
  );
};

export default PageSectionLayout;
