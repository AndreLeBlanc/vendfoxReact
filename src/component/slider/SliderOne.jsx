import React from "react";
import ServiceOne from "../../elements/tjanster/ServiceOne";

export default function SliderOne() {
  return (
    <div className="slider-activation">
      {/* Start Single Slide */}
      <div
        className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
        data-black-overlay="6"
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner d-none d-xl-block">
                <h1 className="title theme-gradient ">
                  Vendfox <br /> Solutions{" "}
                </h1>
              </div>
            </div>
          </div>
          {/* Start Service Area */}
          <div className="service-wrapper service-white  ">
            <ServiceOne />
          </div>
          {/* End Service Area */}
        </div>
      </div>
      {/* End Single Slide */}
    </div>
  );
}
