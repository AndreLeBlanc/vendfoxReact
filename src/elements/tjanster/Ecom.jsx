import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import App from "../../component/common/App";
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
        <PageHelmet pageTitle="Wordpress" />
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
                  <h2 className="title theme-gradient">E-handel</h2>
                  <p>
                    Vi kan e-handel och tillsammans tar vi ert företag till
                    nästa nivå.
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
                            src="/assets/images/service/WordPress_blue_logo.svg"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title">
                            Öka er försäljning på nätet{" "}
                          </h4>
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
                          <h4 className="title">Väx med Wordpress </h4>

                          <p>
                            Wordpress används av många E-handlare. Med plugins
                            som{" "}
                            <a classN href="https://woocommerce.com/">
                              woocommerce
                            </a>{" "}
                            kan en wordpress sida enkelt bli en
                            e-handelsplattform. Er e-handelsplattform kan
                            integreras med tjänster så som klarna, postnord
                            eller affärssystem. Läs mer om våra tjänster inom
                            <Link
                              className="service-details-contactLink"
                              to="/e-handel"
                            >
                              &nbsp;e-handel.
                            </Link>{" "}
                          </p>
                          <p>
                            {" "}
                            Vi driftar och underhåller er wordpress-sida. Till
                            en fast kostnad ser vi till att er hemsida fungerar.
                            Ni är experter på er verksamhet och ska inte behöva
                            tänka på er hemsidas drift. Med våra driftslösningar
                            kommer er hemsida hållas uppdaterad och säker till
                            ett fast pris.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src="/assets/images/techs/WooCommerce_vendfox.svg"
                            alt="Apputveckling med Vendfox"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                  </div>
                  <div className="row service-details-content">
                    <div className="details">
                      <h4 className="title ContactText">
                        Några fördelar med WordPress:
                      </h4>
                      <ul className="liststyle">
                        <li>Stor frihet att designa hemsidan som du vill.</li>
                        <li>Lätt att underhålla.</li>
                        <li>
                          WordPress har en enkel och intuitiv
                          administrationspanel.
                        </li>
                        <li>Plattformen utvecklas kontinuerligt.</li>
                        <li>
                          Bygger på öppen källkod och används kostnadsfritt.
                        </li>
                        <li>WordPress är bra för sökmotoroptimering.</li>
                        <li>Som kund är du inte bunden till en leverantör.</li>
                      </ul>{" "}
                    </div>
                  </div>
                  <h4 className="title ContactText mt--120">
                    <Link className="service-details-contactLink" to="/Kontakt">
                      Kontakta oss
                    </Link>{" "}
                    idag för gratis konsultation om E-handel{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Wrapper */}

        <div>
          <App title="Fler tjänster" />
        </div>

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
