import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class Projektledning extends Component {
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
        <PageHelmet pageTitle="Projektledning" />
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
                  <h2 className="title theme-gradient">Projektledning</h2>
                  <p>
                    Skapa användarvänliga och tilltalande appar, hemsidor och
                    webbutiker.
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
                          <h4 className="title">
                            Ta användarupplevelsen till nästa nivå{" "}
                          </h4>
                          <p>
                            Er app eller hemsida är ditt företags ansikte utåt.
                            Gränssnittet, även kallat{" "}
                            <a
                              className="service-details-contactLink"
                              href="https://www.coursera.org/articles/ui-design"
                            >
                              user interface (UI){" "}
                            </a>
                            , är där människor och teknik möts. För dina kunder
                            eller medarbetare kan det vara det främsta sättet de
                            intragerar mer ert företag. Ett välutformat UI är
                            enkelt och intuitivt då det ger tydliga
                            instruktioner om var man ska klicka till visuell
                            feedback. En bra UI ska fungera så väl på datorn som
                            i mobilen och fungera för alla sorters användare
                            oavsett deras förutsättningar. Målet är att skapa en
                            estetiskt tilltalande samt funktionell och tydlig
                            användarupplevelse.{" "}
                          </p>
                          <p> </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row service-details-content pb--40  align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title">Så jobbar vi med design</h4>

                          <p>
                            För att kunna designa era IT-system så behöver vi
                            lära känna er. Vi gör en förstudie där vi går igenom
                            eventuella existerande system, hur ni jobbar idag
                            och vilka mål ni har. Antingen så utgår vi från er
                            nuvarande grafiska profil eller så skapar vi en ny
                            tillsamans.{" "}
                          </p>
                          <p>
                            Vi kan jobba ihop på plats i Uppsala, Stockholm
                            eller Tranås eller så kan vi utan problem göra
                            designarbetet på distans. Arbetet genomförs i
                            omgångar där du får utvärdera designen efter var
                            omgång. Tillsamans ser vi till att designen passar
                            ert företag, hur ni jobbar och är flexibel inför
                            framtida ändringar. Oavsett om det är en app eller
                            hemsida så ska designen fungera på mobilen. Det är
                            en rolig fas av utvecklingen där många idéer
                            utvecklas och där man får se sin vision växa fram.{" "}
                          </p>
                          <p>
                            När vi har gjort klart designen så presenterar vi en
                            fullt klickbar wireframe. Ni kan då klicka igneom er
                            nya hemsida, app eller webbutik och se hur den
                            kommer se ut och fungera när den väl är färdig.{" "}
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
                      <h4 className="title ContactText">Bra design:</h4>
                      <ul className="liststyle">
                        <li>
                          ökar er försäljning så väl e-handel som annan
                          försäljning.
                        </li>
                        <li>
                          gör webbplattformar och appar lättare att bygga. En
                          bra design underlättar utvecklarnas arbete.
                        </li>
                        <li>förbättrar produktiviteten. </li>
                        <li>ökar er interaktion med kunder.</li>
                        <li>är viktigt för ert varumärke. </li>
                        <li>gör er hemsida mer synlig på google. </li>
                      </ul>{" "}
                    </div>
                  </div>
                  <h4 className="title ContactText mt--120">
                    <Link className="service-details-contactLink" to="/Kontakt">
                      Kontakta oss
                    </Link>{" "}
                    idag för gratis konsultation om Projektledning{" "}
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
}
export default Projektledning;
