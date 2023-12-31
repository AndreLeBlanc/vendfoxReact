import React from "react";
import PageHelmet from "../../component/common/Helmet";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

export default function Appar() {
  return (
    <React.Fragment>
      {/* Start Pagehelmet  */}
      <PageHelmet pageTitle="Appar" />
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
                <h2 className="title theme-gradient">Appar</h2>
                <p>Ta ditt företag till nästa nivå med en egen app</p>
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
                          src="/assets/images/service/apps.jpg"
                          alt="Service Images"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="details mt_md--30 mt_sm--30">
                        <h4 className="title">
                          Därför gynnas ni av en egen app
                        </h4>
                        <p>
                          Folk använder idag mobilen mer än de använder datorer.
                          Att ha ett bra stöd för mobila användare är idag
                          grundläggande för att nå ut till vissa målgrupper. Vi
                          bygger appar både för{" "}
                          <a
                            href="https://www.techtarget.com/searchmobilecomputing/definition/cross-platform-mobile-development"
                            className="service-details-contactLink"
                          >
                            Android och iOS
                          </a>
                          .{" "}
                        </p>
                        <ul className="liststyle">
                          <li>
                            Appen kan underlätta ert interna arbete - utveckla
                            en app för era anställda.
                          </li>
                          <li>Appen kan öka era målgruppers lojalitet.</li>
                          <li>
                            Ge era mobila användare funktioner som annars inte
                            vore möjliga.
                          </li>
                        </ul>
                        <p>
                          Tillsammans med er hemsida och andra IT-system så blir
                          er app en naturlig del av ert digital ekosystem. Appen
                          kan använda baseras på er redan existerande kodbas och
                          integreras med era nuvarande lösningar.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row service-details-content pb--40  align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="details mt_md--30 mt_sm--30">
                        <h4 className="title">
                          Återanvänd kodbasen på flera plattformar
                        </h4>

                        <p>
                          Ni behöver inte återupfinna hjulet. Er hemsida,
                          iOS-app eller Android-app kan till stora delar använda
                          samma kod. På så sätt kan utvecklingen gå betydligt
                          snabbare och priset kan bli betydligt lägre. Ändringar
                          behöver bara göras en gång för att alla plattformar
                          ska uppdateras.{" "}
                        </p>
                        <p>
                          Behöver ni maximera prestandan så kan vi bygga appar
                          optimerade för varje plattform. Med bred kompetens och
                          möjligheten att ta in nischad expertis till era
                          projekt så kan vi hjälpa er att{" "}
                          <Link
                            className="service-details-contactLink"
                            to="/design"
                          >
                            designa
                          </Link>{" "}
                          den app-lösning som passar ert företag bäst.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                        <img
                          className="w-100"
                          src="/assets/images/service/AndroidVendfox.jpg"
                          alt="Apputveckling med Vendfox"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}
                </div>
                <h4 className="title ContactText">
                  {" "}
                  <Link className="service-details-contactLink" to="/Kontakt">
                    Kontakta oss
                  </Link>{" "}
                  idag för gratis konsultation om apputveckling{" "}
                </h4>
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
