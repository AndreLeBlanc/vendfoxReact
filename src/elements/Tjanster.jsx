import React from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import App from "../component/common/App";

export default function Tjanster() {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Tjänster" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <Breadcrumb title="Tjänster" />
      {/* End Breadcrump Area */}

      {/* Start Service Area */}
      <App
        erbjudande="Vendfox är en erfaren webbyrå som kan erbjuda ett brett utbud av tjänster.
Vi kan erbjuda helhetslösningar där vi sköter alla aspekter av er närvaro på internet."
      />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  );
}
