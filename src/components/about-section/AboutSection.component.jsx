import React from "react";

const AboutSection = () => {
  return (
    <div className="row  m-lg-5 m-sm-1">
      <div className="col-lg-6 col-sm-12 mt-5 mb-lg-5 mb-sm-3">
        <img
          className="img-fluid w-75"
          src="https://i.ibb.co/mvBDXnG/nikola-jovanovic-OBok3-F8bu-KY-unsplash-1.jpg"
          alt="about image"
        />
      </div>
      <div className="col-lg-6 col-sm-10 mt-lg-5 mt-sm-0 mb-5">
        <div className="row justify-content-center ml-sm-0 ml-lg-3 mr-sm-0 mr-lg-3 mt-3 mb-3">
          <h2>ABOUT US</h2>
          <hr />
          <h4 className="mb-3">
            Grow Your Own Favorite Plant
          </h4>
          <p className="p-4">
            The greatest fine art of the future will be the  making of a comfortable living 
            from a small piece of land. We believe associating
            with natural plants can bring a peace and mindfulness to your busy
            lives. Taking care of a plant and watching it flourish is kind of a
            meditation itself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
