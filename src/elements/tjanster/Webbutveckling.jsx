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
                  <h1 className="title theme-gradient">Webbutveckling</h1>
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
                          <h2 className="title">
                            En hemsida kan vara så mycket mer{" "}
                          </h2>
                          <p>
                            Vill ni digitalisera era interna flöden, skapa en ny
                            plattform för att interagera med era kunder eller
                            bygga en{" "}
                            <Link
                              to="e-handel"
                              className="service-details-contactLink"
                            >
                              e-handel
                            </Link>{" "}
                            utöver det vanliga? Ni kanske inser att ni kan spara
                            både tid och pengar genom att göra ert företag mer
                            digitalt. Eller så kanske ni har en idé till nästa
                            stora grej inom er bransch. Vi på Vendfox kan
                            webbutveckling och kan bygga hemsidor med mer
                            funktionalitet och anpassningar. Med både front-end
                            och back-end utvecklare i teamet kan vi{" "}
                            <Link
                              to="design"
                              className="service-details-contactLink"
                            >
                              designa
                            </Link>{" "}
                            snygga och funktionella hemsidor med webbappar med
                            de funktioner som ert företag behöver.{" "}
                          </p>
                          <p>
                            Er hemsida ska lyfta ert företag och framhäva det
                            som gör att ni står ut. Istället för att använda
                            standardmallar så går vi igenom kundens nuvarande
                            IT-lösningar, hur kunden jobbar och vad kundens mål
                            är. Tillsammans designar vi er nya hemsida eller
                            webbapp.{" "}
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
                            Återanvänd webbappen som mobilapp
                          </h2>
                          <p>
                            Moderna hemsidor kan utgöra grunden för en mobilapp.
                            Större delen av arbetet av att utveckla en webbapp
                            kan återanvändas för att göra en{" "}
                            <Link
                              to="appar"
                              className="service-details-contactLink"
                            >
                              {" "}
                              mobilapps&nbsp;version.
                            </Link>{" "}
                            Ofta är mobilen det främsta verktyget folk använder
                            för att nå tjänster på nätet. Med en bra hemsida och
                            appar för både Android och iOS har ni en plattform
                            som når alla era användare. Gränsen mellan
                            webbutveckling och mobilappsutveckling har blivit
                            tunnare.{" "}
                          </p>
                          <h2 className="title">Vi är med på hela resan </h2>
                          <p>
                            Vi är med på hela resan från idéstadiet till design,
                            utveckling, drift och vidareutveckling. Vårt mål är
                            att ha långsiktiga relationer med kunderna och bygga
                            deras verksamhet tillsammans. Hemsidan eller
                            webbappen är en central del av kundernas företag och
                            måste växa och anpassas i takt med att behoven
                            ändras. Med ett supportavtal så ser vi till att eran
                            plattform fungerar, uppdateras och hålls säker.
                            Webbutveckling är mer än att bara bygga en hemsida.
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
                      <h2 className="title ContactText">Bra Webbutveckling:</h2>
                      <ul className="liststyle">
                        <li>
                          låter er anpassa hemsidan till er verksamhet snarare
                          än att ni anpassar verksamheten till hemsidan.
                        </li>
                        <li>möjliggör en uppsjö av funktioner och idéer.</li>
                        <li>
                          skapar snabbare och snyggare hemsidor än hemsidor
                          byggda kring färdiga mallar.
                        </li>
                        <li>
                          går att bygga vidare på så de kan växa med ert
                          företag.
                        </li>
                        <li>
                          kan uppdateras och fortsätter att vara modern och i
                          framkant under många år framöver.
                        </li>
                        <li>
                          förenklar ert arbete genom att automatisera
                          arbetsuppgifter. Er hemsida ska avlasta er och era
                          kunder.
                        </li>
                      </ul>{" "}
                    </div>
                  </div>
                  <h2 className="title ContactText mt--120">
                    <Link className="service-details-contactLink" to="/Kontakt">
                      Kontakta oss
                    </Link>{" "}
                    för en konsultation kring hur ni kan ska hemsidan ert
                    företag förtjänar.{" "}
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
export default Webbutveckling;
