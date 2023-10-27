// React Required
import React from "react";
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
import Tjanster from "./elements/Tjanster";
import Webbutveckling from "./elements/tjanster/Webbutveckling";
import Wordpress from "./elements/tjanster/Wordpress";
//import PortfolioDetails from "./elements/PortfolioDetails";

// Blocks Layout

import Brand from "./blocks/Brand";
import Columns from "./blocks/Columns";
import ContactForm from "./blocks/ContactForm";
import Counters from "./blocks/Counters";
import GoogleMap from "./blocks/GoogleMap";
import ProgressBar from "./blocks/ProgressBar";
import Team from "./blocks/Team";
import Testimonial from "./blocks/Testimonial";
import VideoPopup from "./blocks/VideoPopup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

export default function Root() {
  return (
    <BrowserRouter>
      <PageScrollTop>
        <Switch>
          <Route exact path={"/"} component={Hem} />
          {/*
            <Route
              exact
              path={`/Hem`}
              component={Hem}
            />
            <Route
              exact
              path={`/dark-main-demo`}
              component={DarkMainDemo}
            />
            <Route
              exact
              path={`/startup`}
              component={Startup}
            />
            <Route
              exact
              path={`/paralax`}
              component={Paralax}
            />
            <Route
              exact
              path={`/digital-agency`}
              component={DigitalAgency}
            />
            <Route
              exact
              path={`/creative-agency`}
              component={CreativeAgency}
            />
            <Route
              exact
              path={`/personal-portfolio`}
              component={PersonalPortfolio}
            />
            <Route
              exact
              path={`/studio-agency`}
              component={StudioAgency}
            />
            <Route
              exact
              path={`/business`}
              component={Business}
            />
            <Route
              exact
              path={`/portfolio-home`}
              component={HomePortfolio}
            />
            <Route
              exact
              path={`/portfolio-landing`}
              component={PortfolioLanding}
            />
            <Route
              exact
              path={`/creative-landing`}
              component={CreativeLanding}
            />
            <Route
              exact
              path={`/home-particles`}
              component={HomeParticles}
            />
            <Route
              exact
              path={`/dark-portfolio-landing`}
              component={DarkPortfolioLanding}
            />
            <Route
              exact
              path={`/designer-portfolio`}
              component={DesignerPortfolio}
            />
            <Route
              exact
              path={`/creative-portfolio`}
              component={CreativePortfolio}
            />
            <Route
              exact
              path={`/interior-landing`}
              component={InteriorLanding}
            />
            <Route
     cd         exact
              path={`/corporate-business`}
              component={CorporateBusiness}
            />
            <Route
              exact
              path={`/interactive-agency`}
              component={InteractiveAgency}
            />
    */}
          {/* Element Layot */}
          <Route exact path={`/tjanster`} component={Tjanster} />
          {/* Tjänster*/}
          <Route exact path={`/appar`} component={Appar} />
          <Route exact path={`/design`} component={Design} />
          <Route exact path={`/drift`} component={Drift} />
          <Route exact path={`/e-handel`} component={Ecom} />
          <Route exact path={`/plugins`} component={Plugins} />
          <Route exact path={`/projektledning`} component={Projektledning} />
          <Route exact path={`/seo`} component={Seo} />

          <Route exact path={`/webbutveckling`} component={Webbutveckling} />
          <Route exact path={`/wordpress`} component={Wordpress} />
          {/*Tjänster*/}
          <Route exact path={`/kontakt`} component={Kontakt} />
          <Route exact path={`/om-oss`} component={OmOss} />
          {/*       <Route
              exact
              path={`/portfolio-details`}
              component={PortfolioDetails}
  />*/}
          <Route exact path={`/blogg`} component={Blogg} />
          {/***************************** BLOGGINLÄGG ******************************************/}
          <Route
            exact
            path={`/sa-gynnar-anpassade-appar-ditt-foretag`}
            component={AnpassadeAppar}
          />
          <Route
            exact
            path={`/sa-skapar-vi-kostnadseffektiva-losningar`}
            component={KostnadsEffektiva}
          />
          <Route
            exact
            path={`/skapa-en-hemsida-med-hog-konvertering`}
            component={HogKonvertering}
          />
          {/*************************************************************************************/}
          {/* Blocks Elements  */}
          <Route exact path={`/team`} component={Team} />
          <Route exact path={`/counters`} component={Counters} />
          <Route exact path={`/testimonial`} component={Testimonial} />
          <Route exact path={`/video-popup`} component={VideoPopup} />
          <Route exact path={`/clint-logo`} component={Brand} />
          <Route exact path={`/progressbar`} component={ProgressBar} />
          <Route exact path={`/contact-form`} component={ContactForm} />
          <Route exact path={`/google-map`} component={GoogleMap} />
          <Route exact path={`/columns`} component={Columns} />
          <Route path={`/404`} component={error404} />
          <Route component={error404} />
        </Switch>
      </PageScrollTop>
    </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
