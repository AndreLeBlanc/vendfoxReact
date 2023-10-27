import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class Drift extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle="Drift" />
        {/* End Pagehelmet  */}

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--90 bg_image bg_image--5"
          data-black-overlay="5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h1 className="title theme-gradient">Drift</h1>
                  <p>
                    Låt oss sköta era IT-system så du kan sköta ditt företag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Page Wrapper */}
        <div className="rn-service-details pt--120 pb--20 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row service-details-content pb--40 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src="/assets/images/service/ui.jpg"
                            alt="Vendfox UI development"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h2 className="title">
                            Drift och förvaltning av era hemsidor, appar och
                            webbutiker{" "}
                          </h2>
                          <p>
                            Arbetet med era system slutar inte när de lanseras.
                            Vi ser till att tekniken fungerar och uppdateras.
                            Det är inte bara en fråga om att era system ska vara
                            anpassade till era behov även när världen ändras
                            utan är också en fråga om säkerhet. Med regelbunden
                            översyn så hålls system säkra och väl uppdaterade.{" "}
                          </p>
                          <p>
                            Om olyckan är framme har kan du känna dig trygg med
                            att vi tar dagliga backuper på era system så de kan
                            snabbt återställas med all data intakt.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row service-details-content pb--40  align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h2 className="title">
                            Era system fortsätter att utvecklas{" "}
                          </h2>
                          <p>
                            Apple har jobbat på det som idag är macOS i över 40
                            år och det kommer fortfarande regelbundna
                            uppdateringar. Många hemsidor som lanserades på
                            90-talet har utvecklats och är idag moderna sidor
                            anpassade till företagets verksamhet så som den är
                            nu. I&nbsp;många fall är det bättre{" "}
                            <Link
                              to="/projektledning"
                              className="service-details-contactLink"
                            >
                              &nbsp;projektledning
                            </Link>{" "}
                            att utveckla en enklare app eller webbapp och sedan
                            vidareutveckla den över tid. Många av de bästa
                            systemen har växt fram stegvis.{" "}
                          </p>
                          <p>
                            Vi använder endast servrar i Sverige och alla system
                            och datorer finns endast i Sverige. Även om Indiska
                            utvecklare ofta deltar i projekten så hanteras data
                            och driftsatta system endast av svenska utvecklare.
                            Detta är för att se till att vi har full efterlevnad
                            av GDPR.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src="/assets/images/service/ux.jpg"
                            alt="Apputveckling med Vendfox"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                  </div>
                  <div className="row service-details-content">
                    <div className="details">
                      <h2 className="title ContactText">Vendfox</h2>
                      <ul className="liststyle">
                        <li>
                          hjälper er etablera en driftsplan och hittar de bästa
                          strategierna för att hantera era system.
                        </li>
                        <li>
                          skalar upp er hemsida eller app när den växer. När ni
                          får fler användare ska era system hantera det.
                        </li>
                        <li>
                          hjälper er uppnå GDPR kraven för er data. Användarnas
                          data ska hållas säker och det ska finnas goda rutiner
                          för hur den hanteras.{" "}
                        </li>
                        <li>
                          ger er fasta priser på er drift och ert underhåll. Med
                          ett service avtal från oss kommer ni garanterat ha ett
                          system som fungerar framöver.
                        </li>
                        <li>
                          ser till att era system har hög prestanda och
                          optimeras regelbundet. En snabb hemsida får fler
                          användare och rankas högre av google.
                        </li>
                        <li>
                          har support tillgänglig alla vardagar och de flesta
                          helgdagar.
                        </li>
                      </ul>{" "}
                    </div>
                  </div>
                  <h2 className="title ContactText mt--120">
                    <Link className="service-details-contactLink" to="/Kontakt">
                      Kontakta oss
                    </Link>{" "}
                    för en konsultation kring hur ni bäst kan driftsätta er app,
                    webbshop eller hemsida.{" "}
                  </h2>
                  <div className="TjansterButtonCont mt--120 mb--120">
                    <button className=" TjansterButton ">
                      <Link to="/Tjanster">Fler tjänster</Link>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Wrapper */}

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
}
export default Drift;
