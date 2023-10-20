import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import SliderOne from "../component/slider/SliderOne";
import Tjanster from "../elements/tjanster/Tjanster";
import CounterOne from "../elements/counters/CounterOne";
//import Testimonial from "../elements/Testimonial";
import About from "../component/HomeLayout/homeOne/About";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import Helmet from "../component/common/Helmet";

class Hem extends Component {
  render() {
    const PostList = BlogContent.slice(0, 3);
    return (
      <Fragment>
        <Helmet pageTitle="Hem" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Slider Area   */}
        <div className="slider-wrapper ">
          <SliderOne />
        </div>
        {/* End Slider Area   */}

        {/* Start About Area */}
        <div className="about-area about-position-top mt--40 pb--120">
          <About />
        </div>
        {/* End About Area */}

        <div className="service-area ptb--80  bg_image bg_image--3">
          <div className="container">
            <Tjanster />
          </div>
        </div>

        {/* Start Portfolio Area 
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner mb--55">
            <Portfolio />
          </div>
        </div>
         End Portfolio Area */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area mt--48 pt--25 pb--110 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mt--25 pt--25">
                  <h3 className="fontWeight500">Så jobbar vi</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Testimonial Area 
        <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start Blog Area */}
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h2>Blogg</h2>
                  <p>Senaste blogginläggen</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                  <Link to="/blogg" className="btn-transparent rn-btn-dark">
                    <span className="text">See alla</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40">
              {PostList.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <Link to={value.link}>
                        <img
                          className="w-100"
                          src={`/assets/images/blog/${value.images}`}
                          alt="Blog Images"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <Link to={value.link}>{value.title}</Link>
                      </h4>
                      <div className="blog-btn">
                        <Link to={value.link} className="rn-btn text-white">
                          Läs mer
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Blog Area */}

        {/* Start Brand Area */}
        <div className="rn-brand-area brand-separation bg_color--5 pb--120">
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
      </Fragment>
    );
  }
}
export default Hem;
