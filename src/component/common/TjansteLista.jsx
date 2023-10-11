import React, { Component, Fragment } from "react";
import { FaWordpressSimple } from "react-icons/fa";
import { TbPlug } from "react-icons/tb";
import {
  PiDevicesThin,
  PiWrenchThin,
  PiBrowsersThin,
  PiChartLineUpThin,
  PiFigmaLogoThin,
  PiStorefrontThin,
  PiChalkboardTeacherThin,
} from "react-icons/pi";

const ServiceList = [
  {
    title: "Design",
  },
  {
    title: "Webbplattformar",
  },
  { title: "Drift och underhåll", link: "/" },
  {
    title: "Wordpress",
    link: "/Wordpress",
  },
  {
    title: "Plugins och drift",
    link: "/Wordpress",
  },
  {
    title: "SEO",
    link: "/",
  },
  {
    title: "Cross-plattform appar",
    link: "/Appar",
  },
  {
    title: "E-handel",
    link: "/e-handel",
  },
  {
    title: "Projektledning",
    link: "/",
  },
];
class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="service-area creative-service-wrapper pt--60 pb--60 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>Fler Tjänster</h2>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              {ServiceList.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a className="text-center" href={val.link}>
                    <div className="service service__style--2">
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
