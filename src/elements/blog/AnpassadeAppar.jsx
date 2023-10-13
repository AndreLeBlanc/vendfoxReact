import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import { FiClock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class AnpassadeAppar extends Component {
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
        <PageHelmet pageTitle="Vendfox Solutions || Så gynnar anpassade appar ditt företag" />
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
                  <h1 className="title theme-gradient">
                    Så gynnar anpassade appar <br /> ditt företag
                  </h1>
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
                      I dagens digitaliserade värld så måste företag göra det
                      lilla extra för att deras användarupplevelse ska sticka
                      ut. Med anpassade appar som utvecklats specifikt för
                      företaget får kunderna en bättre användarupplevelse
                      kombinerat med företaget nya möjligheter att interagera
                      med kunder och öka försäljningen. Det finns flera goda
                      skäl till att{" "}
                      <Link to="/appar" className="links">
                        {" "}
                        utveckla en anpassad app:
                      </Link>{" "}
                    </p>

                    <h3>Lättare att använda</h3>
                    <p className="mt--40">
                      En anpassad app är skapad just för ditt företag med dina
                      användare i åtanke. Designen, flödena och funktionerna är
                      skapta för att dina användare ska få den bästa
                      upplevelsen. Istället för att dina kunder och anställda
                      ska anpassa sig efter en existerande app så kan appen
                      anpassa sig efter era behov. Med en smidigare och enklare
                      användarupplevelse och en app skapt för just era behov
                      kommer ni spara tid och pengar{" "}
                    </p>
                    <div className="thumbnail">
                      <img
                        src="/assets/images/blog/anpassadeAppar.jpg"
                        alt="Vendfox bygger anpassade appar"
                      />
                    </div>
                    <h3>Den är skapad för just era behov</h3>
                    <p>
                      Jämfört med färdiga app-lösningar finns inte en myriad
                      överflödiga funktioner samtidigt som de funktioner dina
                      användare faktiskt behöver är lättillgängliga och
                      anpassade. En anpassad app har det som är viktigt för dig
                      och ditt företag. Det är inte bara appens design som blir
                      enklare, appen blir oftast snabbare eftersom den inte
                      tyngs ner av överflödiga delar av one-size-fits-all
                      lösningar.{" "}
                    </p>
                    <h3>Anpassade appar har förbättrad säkerhet</h3>
                    <p>
                      Med en anpassad app så kan säkerheten förbättras. Inga
                      tredjepartstjänster får tillgång till datan och ni får
                      full kontroll över vem som har tillgång till den. Genom
                      att utveckla en egen app så vet ni precis vad appen gör
                      och inte gör. Alla appar utvecklade av oss på Vendfox har
                      alla servrar och databaser i Sverige och endast svensk
                      personal har tillgång till dem.{" "}
                    </p>
                    <h3>Roligare och mer engagerande</h3>
                    <p>
                      Med en anpassad app så kan ni få en bättre app som är
                      roligare och lättare att använda. Med analytics kan ni få
                      statistik över användarnas beteende och vad de gillar och
                      inte gillar. Ni kan fortsätta anpassa och bygga på appen
                      även efter att den lanserats. Appen kan anpassas för olika
                      kundsegment och kunderna kan få innehåll som är anpassat
                      just för deras behov. Det leder till en mer engagerande
                      app som era användare kommer använda i högre utsträckning.{" "}
                    </p>
                    <h3>Anpassade appar använder eran hemsida</h3>
                    <p>
                      Er app kan utvecklas tillsammans med er hemsida. Samma kod
                      som driver er hemsida kan i stor utsträckning återanvändas
                      för er app. Om ni ändå ska ha funktionaliteten tillgänglig
                      på er hemsida så har ni ändå gjort större delen av jobbet
                      av att utveckla en egen app. Ni behöver inte återuppfinna
                      hjulet, skillnaden mellan appen och hemsidan är ofta
                      endast en designskillnad. Under ytan så fungerar de
                      likadant.<br></br> För att sammanfatta så har ni mer
                      möjligheter med en anpassad app. Ni får total kontroll
                      över datan, mer möjlighter att anpassa appen och intragera
                      med era kunder. Ni får en bättre överblick över hur
                      kunderna använder appen. Om ni ska ha funktionerna på er
                      hemsida har ni redan gjort lejonparten av allt arbete som
                      krävs för att utveckla en app.{" "}
                      <a href="/kontakt">kontakta oss</a> på vendfox för gratis
                      rådgivning kring hur ni kan bygga er app.{" "}
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
export default AnpassadeAppar;
