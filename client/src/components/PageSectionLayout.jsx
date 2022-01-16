import React from "react";

const PageSectionLayout = ({ sectionTitle = "Page Section Title", sectionSubtitle = "Example section subtitle with medium length text here", children }) => {
  return (
    <div className="container-fluid d-flex justify-content-center pt-5 pb-4">
      <div className="container">
        <div className="row col-md-6 offset-md-3 text-center">
          <h2 className="fw-bold">{sectionTitle}</h2>
          <p className="lead pb-4">{sectionSubtitle}</p>
        </div>
        <div className="row mb-4 text-center">{children}</div>
      </div>
    </div>
  );
};

export default PageSectionLayout;
