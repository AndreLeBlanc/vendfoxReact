import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import WorkOrder from "../component/common/WorkOrder";
import CounterOne from "./counters/CounterOne";
//import Testimonial from "./Testimonial";
import BrandTwo from "./BrandTwo";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

class About extends Component {
  render() {
    let title = "Så jobbar vi",
      description = `Vendfox solutions grundades av två seniora konsulter som funderat 
      länge kring hur man bäst driver ett konsultbolag. Vi tror på att jobba nära kunden,
      att låta projekten växa fram iterativt och att ha fasta priser. Med ett stort 
      kontaktnät i Indien kan vi rekrytera väl valda utvecklare på ett sätt som endast
      stora konsultbolag brukar kunna. Vi jobbar i blandade team med delar utvecklingen 
      i Sverige och delar i Indien. Målet har varit att erbjuda tjänster som oftast endast
      stora konsultbolag erbjuder i ett mindre format och med en bråkdel av deras omkostnader med en större omtanke för små och medelstora kunder.`;
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Om oss" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Om oss"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center ">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/aboutDog.jpg"
                      alt="Om Vendfox"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">Analys</h3>
                          <p>
                            Vi analyserar ert företag, era behov och era
                            nuvarande IT-lösningar. Tillsammans designar vi er
                            nya lösning och skriver en kravspecifikation. Vi
                            erbjuder fasta priser och avtalen är alltid med vårt
                            svenska bolag.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">Utveckling</h3>
                          <p>
                            Dina lösningar utvecklas i sprintar på två veckor
                            där vi utvärderar och prioriterar arbetet efter
                            varje sprint. Projektledning, servrar och data
                            hanteras alltid från Sverige. Våra utvecklare i
                            Sverige och Indien utvecklar mjukvaran Tillsammans.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">Så jobbar vi</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Finding Us Area  */}
        <div className="rn-finding-us-area rn-finding-us bg_color--1">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
                <h4 className="theme-gradient">Läs mer om våra tjänster</h4>
                <p>
                  Vendfox är en bred webbyrå som erbjuder heltäckande lösningar
                  inom IT. Vi erbjuder bland annat hemsidor, Webbplattformar,
                  e-handelslösningar och affärssystem.
                </p>
                <a className="rn-btn btn-white" href="/tjanster">
                  Tjänster
                </a>
              </div>
            </div>
            <div className="thumbnail">
              <div className="image">
                <img
                  src="/assets/images/about/finding-us-01.png"
                  alt="Vendfox tjänster"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area  */}

        <div className="mt--60">
          <WorkOrder />
        </div>

        {/* Start Team Area  */}
        <div className="rn-team-area bg_color--1 ptb--80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className=" service-style--2 text-center mb--25">
                  <h2 className="section-title">Våra grundare</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/AndreFigResized.jpg"
                      alt="André tech lead Vendfox"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">André Le Blanc</h4>
                    <p className="designation">Tech lead</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://github.com/AndreLeBlanc">
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/andre-le-blanc-/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/team-02.jpg"
                      alt="Anto head of operations Vendfox"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Anto Rajulin</h4>
                    <p className="designation">Head of Operations</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.linkedin.com/in/anto-rajulin-21872055/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Sin
              gle Team  */}
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Testimonial Area 
        <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start Brand Area */}
        <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

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
export default About;
