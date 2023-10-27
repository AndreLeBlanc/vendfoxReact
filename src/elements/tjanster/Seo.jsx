import React from "react";
import PageHelmet from "../../component/common/Helmet";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

export default function Seo() {
  return (
    <React.Fragment>
      {/* Start Pagehelmet  */}
      <PageHelmet pageTitle="Seo" />
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
                <h1 className="title theme-gradient">
                  sökmotoroptimering (SEO){" "}
                </h1>
                <p>Se till att er hemsida syns på google</p>
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
                          Sökmotorer är hur kunder hittar er
                        </h2>
                        <p>
                          Google är idag det främsta sättet för både företag och
                          privatpersoner att hitta företag. Varje dag söker
                          svenskarna 40 miljoner gånger på google och de flesta
                          som går in på en ny sida kommer från google. För
                          företag har det aldrig varit viktigare att synas på
                          google. Även kunder som har hört om ditt företag
                          offline kommer ofta söka på ditt företag innan de gör
                          en affär.
                        </p>
                        <p>
                          Ett sätt att synas på google är att köpa anonser. Det
                          kan ge kortsiktiga resultat men är dyrt utan att ge
                          något i längden. Att synas genom att ha en
                          sökmotoroptimerad hemsida eller webbshop är billigare
                          och ger resultat i längden.
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
                          SEO och inte slumpen avgör vem som syns{" "}
                        </h2>
                        <p>
                          Det är ingen slump att vissa företag hamnar högt upp i
                          sökresultaten medan andra hamnar långt ner. Företagen
                          som ranrkar högt gör det eftersom de har satsat på att{" "}
                          <a
                            href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                            className="service-details-contactLink"
                          >
                            sökmotoroptimering
                          </a>
                          .
                        </p>
                        <p>
                          Att hamna högt upp på google kräver ett helhetsgrepp
                          och en långsiktig strategi. Bra
                          <Link
                            to="/webbutveckling"
                            className="service-details-contactLink"
                          >
                            &nbsp;webbutveckling
                          </Link>{" "}
                          med en snabb och kvalitativ hemsida hjälper en öka i
                          rankingen. Buggar på hemsidan och långa laddningstider
                          gör att man döljs av google. Innehållet på hemsidan är
                          minst lika viktigt. Innan man börjar jobba med
                          innehållet bör man ha en strategi och man bör planera
                          sitt innehåll efter vilka sökord man vill synas på.
                        </p>
                        <p>
                          Modern seo bygger till stor del på att bygga bra
                          hemsidor. Om användarna får en bra upplevelse av
                          hemsidan, stannar länge på hemsidan och google anser
                          att det håller hög kvalitet så syns den. Därför är det
                          viktigt för oss att lära känna våra kunder och deras
                          målgrupper för att kunna skapa en SEO-strategi som är
                          anpassad för just deras förutsättningar.
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
                  <div className="details ">
                    <h2 className="title ContactText ">
                      Därför behöver ditt företag SEO
                    </h2>
                    <ul className="liststyle max--w--sm">
                      <li className="max--w--sm">
                        Det ger långsiktiga resultat. Annonser kan ge en
                        tillfällig boost men SEO ger resultat på sikt.
                      </li>
                      <li>
                        Pengarna som läggs på att optimera er hemsida eller
                        e-handel kommer förbättra den och göra att användarna
                        som når den konverterar.
                      </li>
                      <li>
                        SEO gör att ni får kontroll över vad som syns när man
                        söker på ert företag. Få kontroll på ert varumärke genom
                        att se till att du kontrollerar vad som kommer upp när
                        man söker på er.{" "}
                      </li>
                      <li>
                        SEO är ett nollsummespel, om du hamnar högre måste dina
                        konkurrenter per definition hamna lägre.
                      </li>
                    </ul>{" "}
                  </div>
                </div>
                <h2 className="title ContactText mt--120">
                  <Link className="service-details-contactLink" to="/Kontakt">
                    Kontakta oss
                  </Link>{" "}
                  för en konsultation kring hur ni kan synas på sökmotorer.{" "}
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
