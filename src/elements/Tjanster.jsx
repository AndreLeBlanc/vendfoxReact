import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiMonitor,
  FiChevronUp,
} from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const ServiceList = [
  {
    icon: <FiCast />,
    title: "Design",
    description:
      "Våra erfarna designers analyserar ert företag och era behov och designar hemsidor som är både funktionella och snygga. Ni jobbar tillsammans för att skapa en hemsida som passar er.",
  },
  {
    icon: <FiLayers />,
    title: "Webbplattformar",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiUsers />,
    title: "Drift och underhåll",
    description:
      "Samarbetet fortsätter långt efter att uppdraget är klart. Drift, underhåll och support erbjuds löpande. Alla servrar och all data hanteras endast från Sverige av GDPR skäl.",
  },
  {
    icon: <FiMonitor />,
    title: "Wordpress",
    description:
      "Design, Utveckling och drift av wordpress-sidor. Wordpress är en enkel lösning för att snabbt bygga hemsidor för små och medelstora företag.",
  },
  {
    icon: <FiCast />,
    title: "Plugins och drift",
    description:
      "Utveckling av plugins och moduler till existerande hemsidor. Vi hjälper både företag och byråer bygga ny funktionalitet på existerande hemsidor.",
  },
  {
    icon: <FiMonitor />,
    title: "SEO",
    description:
      "Optimering av hemsidor så att den rankas högre på googles sökresultat. Genom att förbättra din hemsida driver vi trafik och affärer till din hemsida.",
  },
];

const ECom = [
  {
    icon: <FiCast />,
    title: "Design",
    description:
      "Våra erfarna designers analyserar ert företag och era behov och designar hemsidor som är både funktionella och snygga. Ni jobbar tillsammans för att skapa en hemsida som passar er.",
  },
  {
    icon: <FiLayers />,
    title: "Webbplattformar",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiUsers />,
    title: "Drift och underhåll",
    description:
      "Samarbetet fortsätter långt efter att uppdraget är klart. Drift, underhåll och support erbjuds löpande. Alla servrar och all data hanteras endast från Sverige av GDPR skäl.",
  },
];

const Appar = [
  {
    icon: <FiCast />,
    title: "Cross-plattform appar",
    description:
      "Cross-platform för mobil apputveckling betyder utveckling av applikationer som kan köras på flera mobilplattformar (iOS och Google Play) med hjälp av samma kodbas. Det snabbar på utvecklingen och sänker kostnaden.",
  },
  {
    icon: <FiLayers />,
    title: "Webbplattformar",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiUsers />,
    title: "Drift och underhåll",
    description:
      "Samarbetet fortsätter långt efter att uppdraget är klart. Drift, underhåll och support erbjuds löpande. Alla servrar och all data hanteras endast från Sverige av GDPR skäl.",
  },
];

class Tjanster extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Tjänster" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Tjänster"} />
        {/* End Breadcrump Area */}

        {/* Start Service Area */}
        <div className="service-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>Webbutveckling</h2>
                  <p>
                    Vi utvecklar allt från enklare men snygga och informativa
                    webbplatser i Wordpress till tyngre webbtjänster och
                    plattformar.
                  </p>
                </div>
              </div>
            </div>
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a href="/service-details">
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

        {/* Start Service Area */}
        <div className="service-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>E-handel</h2>
                  <p>
                    Konsumenterna driver utvecklingen av e-handeln framåt i
                    rasande fart. Vendfox jobbar om era befintliga
                    e-handelslösningar eller bygger nya från grunden, hela tiden
                    med fokus på trafik, kundupplevelse och konvertering.
                  </p>
                </div>
              </div>
            </div>
            <div className="row service-one-wrapper">
              {ECom.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a className="text-center" href="/service-details">
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

        {/* Start Service Area */}
        <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>Appar</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, <br /> but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              {Appar.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a href="/service-details">
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

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
export default Tjanster;
