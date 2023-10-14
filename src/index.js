// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

import PageScrollTop from "./component/PageScrollTop";

// Home layout
//import Demo from "./page-demo/Demo";
import Hem from "./home/Hem";
//import Startup from "./home/Startup";
//import Paralax from "./home/Paralax";
//import HomePortfolio from "./home/HomePortfolio";
//import DigitalAgency from "./home/DigitalAgency";
//import CreativeAgency from "./home/CreativeAgency";
//import PersonalPortfolio from "./home/PersonalPortfolio";
//import Business from "./home/Business";
//import StudioAgency from "./home/StudioAgency";
//import PortfolioLanding from "./home/PortfolioLanding";
//import CreativeLanding from "./home/CreativeLanding";
//import HomeParticles from "./home/HomeParticles";
//import CreativePortfolio from "./home/CreativePortfolio";
//import DesignerPortfolio from "./home/DesignerPortfolio";
//import InteriorLanding from "./home/Interior";
//import CorporateBusiness from "./home/CorporateBusiness";
//import InteractiveAgency from "./home/InteractiveAgency";

// Dark Home Layout
//import DarkMainDemo from "./dark/MainDemo";
//import DarkPortfolioLanding from "./dark/PortfolioLanding";

// Element Layout
import AnpassadeAppar from "./elements/blog/AnpassadeAppar";
import Appar from "./elements/tjanster/Appar";
import Blogg from "./elements/Blogg";
import BlogDetails from "./elements/BlogDetails";
import Design from "./elements/tjanster/Design";
import Drift from "./elements/tjanster/Drift";
import error404 from "./elements/error404";
import Ecom from "./elements/tjanster/Ecom";
import HogKonvertering from "./elements/blog/HogKonvertering";
import Kontakt from "./elements/Kontakt";
import KostnadsEffektiva from "./elements/blog/KostnadsEffektiva";
import OmOss from "./elements/OmOss";
import Plugins from "./elements/tjanster/Plugins";
import Projektledning from "./elements/tjanster/Projektledning";
import Seo from "./elements/tjanster/Seo";
import ServiceDetails from "./elements/ServiceDetails";
import Tjanster from "./elements/Tjanster";
import Webbutveckling from "./elements/tjanster/Webbutveckling";
import Wordpress from "./elements/tjanster/Wordpress";
//import PortfolioDetails from "./elements/PortfolioDetails";

// Blocks Layout

import Brand from "./blocks/Brand";
import Columns from "./blocks/Columns";
import ContactForm from "./blocks/ContactForm";
import Counters from "./blocks/Counters";
import Gallery from "./blocks/Gallery";
import GoogleMap from "./blocks/GoogleMap";
import PricingTable from "./blocks/PricingTable";
import Portfolio from "./blocks/Portfolio";
import ProgressBar from "./blocks/ProgressBar";
import Team from "./blocks/Team";
import Testimonial from "./blocks/Testimonial";
import VideoPopup from "./blocks/VideoPopup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <PageScrollTop>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Hem} />
            {/*
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/Hem`}
              component={Hem}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/dark-main-demo`}
              component={DarkMainDemo}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/startup`}
              component={Startup}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/paralax`}
              component={Paralax}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/digital-agency`}
              component={DigitalAgency}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/creative-agency`}
              component={CreativeAgency}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/personal-portfolio`}
              component={PersonalPortfolio}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/studio-agency`}
              component={StudioAgency}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/business`}
              component={Business}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio-home`}
              component={HomePortfolio}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio-landing`}
              component={PortfolioLanding}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/creative-landing`}
              component={CreativeLanding}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-particles`}
              component={HomeParticles}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/dark-portfolio-landing`}
              component={DarkPortfolioLanding}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/designer-portfolio`}
              component={DesignerPortfolio}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/creative-portfolio`}
              component={CreativePortfolio}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/interior-landing`}
              component={InteriorLanding}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/corporate-business`}
              component={CorporateBusiness}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/interactive-agency`}
              component={InteractiveAgency}
            />
    */}
            {/* Element Layot */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/tjanster`}
              component={Tjanster}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/service-details`}
              component={ServiceDetails}
            />
            {/* Tjänster*/}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/appar`}
              component={Appar}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/design`}
              component={Design}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/drift`}
              component={Drift}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/e-handel`}
              component={Ecom}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/plugins`}
              component={Plugins}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/projektledning`}
              component={Projektledning}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/seo`}
              component={Seo}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/webbutveckling`}
              component={Webbutveckling}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/wordpress`}
              component={Wordpress}
            />
            {/*Tjänster*/}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/kontakt`}
              component={Kontakt}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/om-oss`}
              component={OmOss}
            />
            {/*       <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio-details`}
              component={PortfolioDetails}
  />*/}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blogg`}
              component={Blogg}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-details`}
              component={BlogDetails}
            />
            {/***************************** BLOGGINLÄGG ******************************************/}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/sa-gynnar-anpassade-appar-ditt-foretag`}
              component={AnpassadeAppar}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/sa-skapar-vi-kostnadseffektiva-losningar`}
              component={KostnadsEffektiva}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/skapa-en-hemsida-med-hog-konvertering`}
              component={HogKonvertering}
            />
            {/*************************************************************************************/}
            {/* Blocks Elements  */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/team`}
              component={Team}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/counters`}
              component={Counters}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/testimonial`}
              component={Testimonial}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio`}
              component={Portfolio}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/video-popup`}
              component={VideoPopup}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/gallery`}
              component={Gallery}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/clint-logo`}
              component={Brand}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/progressbar`}
              component={ProgressBar}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact-form`}
              component={ContactForm}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/google-map`}
              component={GoogleMap}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/columns`}
              component={Columns}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/pricing-table`}
              component={PricingTable}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/404`}
              component={error404}
            />
            <Route component={error404} />
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
