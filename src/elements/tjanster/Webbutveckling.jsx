import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class Webbutveckling extends Component {
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
        <PageHelmet pageTitle="Webbutveckling" />
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
                  <h2 className="title theme-gradient">Webbutveckling</h2>
                  <p>
                    Skapa dynamiska och engagerande hemsidor, webbplattformar
                    och webbutiker.
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
                            En hemsida kan vara så mycket mer{" "}
                          </h4>
                          <p>
                            Vi skapar skräddarsydda hemsidor som kan fyllas med
                            dynamsikt innehåll skapat just efter era behov.{" "}
                          </p>
                          <p>. </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row service-details-content pb--40  align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title">
                            Så ser vil till ert IT-projekt lyckas
                          </h4>

                          <p>
                            Efter att ha jobbat många år inom konsulbranschen
                            och deltagit i många projekt så vet vi vad som
                            fungerar. Vi jobbar med{" "}
                            <Link
                              to="KostnadsEffektiva"
                              className="service-details-contactLink"
                            >
                              {" "}
                              agila&nbsp;metoder
                            </Link>{" "}
                            vilket innebär att vi låter projekten växa fram
                            stegvis. Istället för att bygga allt på ett bräde
                            med ett enda stort projekt så bryter vi ner
                            projektet i delprojekt (
                            <a
                              href="https://www.scrum.org/resources/what-scrum-module"
                              className="service-details-contactLink"
                            >
                              sprintar
                            </a>
                            ) . Efter varje sprint så utvärderar vi och justerar
                            kravspecifikationen. Målet är att upptäcka problem
                            tidigt, hitta sätt att förbättra produkten och se
                            till att det som byggs är den bästa lösningen för
                            kunden. Det är oftast slöseri att bygga en stor
                            komplex lösning från start. Istället är det bättre
                            att bygga en billigare och enklare lösning som
                            snabbt kan komma ut och testas med riktiga
                            användare. Denna första version ska samtidigt vara
                            enkel att bygga vidare på och utöka till den färdiga
                            produkten.{" "}
                          </p>
                          <p>
                            Oavsett om ni vill att vi ska leda och utveckla er
                            nya nya IT-system eller om ni vill ha hjälp med en
                            upphandling kan vi bistå. Undvik att hamna i
                            fällorna och se till att er nya webbshop, hemsida
                            eller app lever upp till förväntningarna.{" "}
                          </p>
                          <p> </p>
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
                      <h4 className="title ContactText">Bra Webbutveckling:</h4>
                      <ul className="liststyle">
                        <li>gör att ni kommer igång snabbare.</li>
                        <li>
                          minskar slöseri och risken att saker måste göras om.
                        </li>
                        <li>gör beställaren nödjdare.</li>
                        <li>ökar kvalitén och minimerar buggar.</li>
                        <li>
                          ser till att det ni får är det som bäst passar era
                          behov.
                        </li>
                        <li>
                          skapar bra långsiktiga relationer mellan beställaren
                          och kunden.
                        </li>
                      </ul>{" "}
                    </div>
                  </div>
                  <h4 className="title ContactText mt--120">
                    <Link className="service-details-contactLink" to="/Kontakt">
                      Kontakta oss
                    </Link>{" "}
                    för råd kring hur ni bäst projektleder era IT-satsningar.{" "}
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
export default Webbutveckling;
