import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";
import {
  AiOutlineFileSearch,
  AiOutlineFundProjectionScreen,
  AiOutlineLineChart,
  AiOutlineCode,
} from "react-icons/ai";

const ServiceList = [
  {
    icon: "01",
    title: "Webbutveckling",
    description:
      "Vi designar och bygger hemsidor från snygga och användarvänliga wordpress-sidor till större webbplattformar",
  },
  {
    icon: AiOutlineLineChart,
    title: "E-handel",
    description:
      "Ta din försäljning till nästa nivå med våra e-handelslösningar. Med 14 års erfarenhet kan vi bygga förstklassiga lösningar",
  },
  {
    icon: "03",
    title: "Appar",
    description:
      "Ta ditt företag till nästa nivå med en egen app. Med cross-plattform appar kan vi använda samma kodbas på appen och hemsidan",
  },
  {
    icon: "04",
    title: "Drift och underhåll",
    description:
      "Vi ser till att system vi utvecklar driftas, updateras och underhålls. Med supportavtal tar vi ansvaret för er hemsida",
  },
];

class Tjanster extends Component {
  render() {
    let title = "Tjänster",
      description =
        "Vendfox Solutions är en webbyrå som hjälper dig designa och utveckla din webbplats, app eller ditt e-handel. Vi är en heltäckande byrå med mycket bred kompetens. Genom kundnära samarbete och agila arbetssätt och fokus på er verksamhet bygger vi ditt projekt.";
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
              <h2 className="title">{title}</h2>
              <p>{description}</p>
              <div className="service-btn">
                <a className="btn-transparent rn-btn-dark" href="/tjanster">
                  <span className="text">Läs mer</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-12 mt_md--50">
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
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
      </React.Fragment>
    );
  }
}
export default Tjanster;
