import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class Ecom extends Component {
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
        <PageHelmet pageTitle="E-handel" />
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
                  <h1 className="title theme-gradient">E-handel</h1>
                  <p>
                    Vi kan e-handel och tillsammans skapar vi motorn i er
                    försäljning.
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
                            src="/assets/images/service/E-handel-med-Vendfox.jpg"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h2 className="title">
                            Öka er försäljning på nätet{" "}
                          </h2>
                          <p>
                            E-handeln har länge varit tillväxtmotorn när det
                            gäller företagens försäljning. Men i takt med
                            utvecklingen så påverkas e-handlarnas vardag. Gamla
                            sanningar fungerar inte längre och nya lösningar och
                            verktyg presenteras hela tiden. Man måste vara snabb
                            på bollen och anpassa sig innan man blir omsprungen
                            av konkurrenterna.{" "}
                          </p>
                          <p>
                            Vendfox har en bred erfarenhet av e-handel. Vi har
                            både jobbat med den tekniska sidan med att bygga
                            välanpassade och moderna e-handelsplattformar men vi
                            kan även rådge er när det gäller resten av
                            e-handeln. Efter att ha jobbat med många olika
                            kunder i flera olika länder så vet vi vad som
                            fungerar och inte. Därför kan vi erbjuda kompletta
                            lösningar med CRM system, affärssystem, logistik och
                            strategier för att lyckas med er e-handel.{" "}
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
                            Få den webbutik som passar dig
                          </h2>

                          <p>
                            Vi har erfarenhet av olika teknologier och kan bygga
                            en lösning som är anpassad efter era behov. Har ni
                            bara ett behov av en mindre lösning i{" "}
                            <a
                              href="https://www.shopify.com/se"
                              className="service-details-contactLink"
                            >
                              shopify&nbsp;
                            </a>
                            vara ett prisvärt alternativ. För en liten större
                            webbutik kan woocommerce och{" "}
                            <Link
                              to="/wordpress"
                              className="service-details-contactLink"
                            >
                              wordpress
                            </Link>{" "}
                            skapa en butik med mer funktionalitet och lägre
                            driftskostnader till ett effektivt pris. Om ni vill
                            ha mer anpassad funktionalitet, egna produkter och
                            full kontroll över er hemsida kan våra{" "}
                            <Link
                              to="/webbutvecklare"
                              className="service-details-contactLink"
                            >
                              webbutvecklare
                            </Link>{" "}
                            bygga anpassade e-handels lösningar som är skapade
                            specifikt för era behov.{" "}
                          </p>
                          <p></p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src="/assets/images/service/E-handel-med-Vendfox-sida.jpg"
                            alt="Apputveckling med Vendfox"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                  </div>
                  <div className="row service-details-content">
                    <div className="details">
                      <h2 className="title ContactText">
                        Därför bör ni satsa på e-handel:
                      </h2>
                      <ul className="liststyle">
                        <li>
                          Er webbutik kan sälja nästan allt. Även tjänster och
                          digitala produkter kan säljas online.
                        </li>
                        <li>En webbutik är lätt att underhålla.</li>
                        <li>
                          Ni kan nå kunder i hela Sverige och även andra länder.
                        </li>
                        <li>En webbutik är billigare än en fysisk butik.</li>
                        <li>
                          Ni kan driva er webbutik utan att tvingas vara på
                          plats eller jobba vissa tider.{" "}
                        </li>
                        <li>
                          E-handel passar både småbolag och jättar, er
                          e-handelslösning skalar med er.
                        </li>
                      </ul>{" "}
                    </div>
                  </div>
                  <h2 className="title ContactText mt--120">
                    <Link className="service-details-contactLink" to="/Kontakt">
                      Kontakta oss
                    </Link>{" "}
                    idag för gratis konsultation om E-handel{" "}
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
export default Ecom;
