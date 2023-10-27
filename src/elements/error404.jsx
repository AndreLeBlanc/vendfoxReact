import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/header/Header";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/FooterTwo";

export default function error404() {
  return (
    <>
      <Header
        headerPosition="header--transparent"
        color="color-white"
        logo="logo-light"
      />
      {/* Start Page Error  */}
      <div className="error-page-inner bg_color--4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <h1 className="title theme-gradient">404!</h1>
                <h3 className="sub-title">Sidan saknas</h3>
                <span>Sidan du letar efter verkar inte finnas. </span>
                <div className="error-button">
                  <Link to="/" className="rn-button-style--2 btn-solid">
                    Tillbaka till hem
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Error  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </>
  );
}
