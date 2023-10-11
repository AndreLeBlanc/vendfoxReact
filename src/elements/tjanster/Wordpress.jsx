import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import App from "../../component/common/App";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class Wordpress extends Component {
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
                  <h2 className="title theme-gradient">Wordpress</h2>
                  <p>Er hemsida är ert företags främsta ansikte utåt</p>
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
                            Webbutveckling med WordPress{" "}
                          </h4>
                          <p>
                            <a
                              className="service-details-contactLink"
                              href="https://wordpress.com/sv/"
                            >
                              &nbsp;WordPress&nbsp;
                            </a>
                            är verktyget som skapat hälften av världens
                            hemsidor. Vi som grundat Vendfox har byggt
                            hundratals hemsidor med WordPress i över 12 år. Vi
                            kan inte bara bygga och designa er hemsida, vi har
                            erfarenheten och kunskapen att skapa er digitala
                            strategi och sökmotoroptimering för att se till att
                            er hemsida verkligen leverar.{" "}
                          </p>
                          <p>
                            En wordpress sida kan vara så mycket mer än en
                            statisk hemsida. Med plugins så kan en uppsjö av
                            olika funktioner adderas till er hemsida. Många
                            plugins finns färdiga men vi utvecklar även egna.
                            Det gör att vi kan göra mer med Wordpress än de
                            flesta.{" "}
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
                            <a
                              className="service-details-contactLink"
                              href="https://woocommerce.com/"
                            >
                              woocommerce&nbsp;
                            </a>
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
                    idag för gratis konsultation om WordPress{" "}
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
export default Wordpress;
