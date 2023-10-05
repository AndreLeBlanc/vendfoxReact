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
                            src="/assets/images/service/E-handel-med-Vendfox.jpg"
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
                          <h4 className="title">What is Lorem Ipsum?</h4>

                          <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum."
                          </p>
                          <p>
                            {" "}
                            "Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.{" "}
                          </p>
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
                      <h4 className="title ContactText">
                        Därför bör ni satsa på e-handel:
                      </h4>
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
