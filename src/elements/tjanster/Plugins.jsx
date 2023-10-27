import React from "react";
import PageHelmet from "../../component/common/Helmet";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

export default function Plugin() {
  return (
    <React.Fragment>
      {/* Start Pagehelmet  */}
      <PageHelmet pageTitle="Plugins" />
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
                <h1 className="title theme-gradient">Plugins </h1>
                <p>Vi hjälper webbyråer möta kundernas behov</p>
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
                          Behöver er webbyrå mer kapacitet?
                        </h2>
                        <p>
                          Vi på Vendfox sammarbetar gärna med andra byråer.
                          Flera av våra bästa projekt har varit tillsammans med
                          andra. Ofta ha kunder komplexa behov och ni behöver
                          många olika kompetenser för att leverera. Vi bistår
                          gärna inom våra expertområden och ser till att era
                          kunders behov tillgodoses.{" "}
                        </p>
                        <p>
                          Våran expertkompetens ligger inom programmering,
                          systemutveckling och e-handel. Vi kan bygga lösningar
                          som kan integreras med era lösningar och skapar de
                          produkter era kunder efterfrågar.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row service-details-content pb--40  align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="details mt_md--30 mt_sm--30">
                        <h2 className="title"></h2>
                        <p></p>
                        <p>
                          <Link
                            to="/webbutveckling"
                            className="service-details-contactLink"
                          ></Link>{" "}
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
                  <div className="details ">
                    <h2 className="title ContactText ">
                      Det kan vi bland annat göra för er webbyrå{" "}
                    </h2>
                    <ul className="liststyle max--w--sm">
                      <li className="max--w--sm">
                        Bredda ert utbud med backend utveckling utöver vad ni
                        kan göra inhouse.
                      </li>
                      <li>
                        Se till att era kunder lyckas med e-handel genom att ta
                        in vår expertis på området.
                      </li>
                      <li>
                        Låt inte era kunder vänta, vi har förmågan att skala
                        snabbt och ta nya uppdrag.
                      </li>
                      <li>
                        Få de wordpress-plugins din kund efterfrågar. Vi
                        utvecklar och modifierar wordpress-plugins.
                      </li>
                      <li>
                        Integrera olika system och bygga ihop större system.
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
