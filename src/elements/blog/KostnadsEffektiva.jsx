import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import { FiClock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class KostnadsEffektiva extends Component {
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
        <PageHelmet pageTitle="Så skapar vi kostnadseffektiva IT-lösningar" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-single-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    Så skapar vi <br /> kostnadseffektiva IT-lösningar
                  </h2>
                  <ul className="blog-meta d-flex justify-content-center align-items-center">
                    <li>
                      <FiClock />
                      18 augusti 2023
                    </li>
                    <li>
                      <FiUser />
                      Vendfox
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Blog Details */}
        <div className="rn-blog-details pt--110 pb--70 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-wrapper">
                  <div className="inner">
                    <p>
                      Vendfox erbjuder kostnadseffektiva IT-lösningar av hög
                      kvalitet. Vi bjuder alltid på en gratis konsultation och
                      diskuterar gärna dina idéer kring IT-lösningar.{" "}
                    </p>

                    <p className="mt--40">
                      Vendfox använder en{" "}
                      <a href="https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/">
                        {" "}
                        agil metodik
                      </a>{" "}
                      för att leda projekt. Det betyder att vi bryter ner stora
                      projekt i mindre beståndsdelar och jobbar iterativt för
                      att skapa vår IT-lösningar. Det gör oss flexibla samtidigt
                      som vi kan jobba snabbare och minimerar risker.{" "}
                    </p>
                    <div className="blog-single-list-wrapper d-flex flex-wrap">
                      <div className="thumbnail">
                        <img
                          className="w-100"
                          src="/assets/images/blog/vendfox_agile.png"
                          alt="Vendfox jobbar agilt"
                        />
                        <span>
                          Vendfox använder agila metoder för att utveckla
                          mjukvara effektivt{" "}
                        </span>
                      </div>
                      <div className="content">
                        <h3 className="title">Bryt ner projekten i sprintar</h3>
                        <p>
                          Istället för att se projekt som stora monoliter så
                          bestämmer vi de övergripande målen och jobbar istället
                          i sprintar på två veckor. Efter varje sprint så
                          utvärderar vi och planerar inför nästa sprint. Målet
                          är att vi ska kunna leverera något nytt till kunden
                          varje vecka. För oss är tät kundkontakt viktigt och vi
                          vill gärna att kunden är med och utvärderar och
                          planerar sprintarna. Genom regelbunden kontakt och
                          planering så kan vi minimera riskerna för fel och dra
                          nytta av varandras kunskap och erfarenheter för att
                          bygga den bästa möjliga lösningen.
                        </p>
                      </div>
                    </div>
                    <p className="mt--40">
                      Den agila metodiken har seglat upp som standarden för hur
                      de bästa IT-företagen jobbar. Fel upptäcks tidigt vilket
                      minskar risken för att tid slösas vilket sparar pengar.
                      Att regelbundet utvärdera arbetet och att jobba med att
                      förbättra processen inför nästa sprint hjälper team att
                      förbättra sig.
                    </p>
                    <h3 className="title">
                      Vi rekryterar utvecklare internationellt för att hitta
                      rätt talanger
                    </h3>
                    <p className="mt--40">
                      Genom att rekrytera internationellt och tack vare vårt
                      omfattande kontaktnät i Indien kan vi hitta just de
                      utvecklare ni behöver. Vi har en stor pool av utvecklare
                      som vi har jobbat med och litar på. Därmed kan vi erbjuda
                      mindre företag en teknisk kompetens som oftast är
                      reserverad för storföretag eftersom vi kan plocka in
                      nyckelpersoner med spetskompetens även för mindre kunder.
                    </p>
                    <p className="mt--40">
                      Vendfox kan bistå med rätt kompetens till ett
                      konkurrenskraftigt pris.{" "}
                      <Link to="/kontakt">
                        <span>kontakta oss </span>
                      </Link>
                      för att diskutera dina behov av IT-lösningar. Vi bjuder
                      alltid på gratis konsultationer.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Details */}

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
export default KostnadsEffektiva;
