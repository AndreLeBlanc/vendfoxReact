import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  PiDevicesThin,
  PiBrowsersThin,
  PiWrenchThin,
  PiStorefrontThin,
} from "react-icons/pi";

const ServiceList = [
  {
    icon: <PiBrowsersThin />,
    title: "Webbutveckling",
    description:
      "Vi designar och bygger hemsidor från snygga och användarvänliga wordpress-sidor till större webbplattformar.",
    link: "webbutveckling",
  },
  {
    icon: <PiStorefrontThin />,
    title: "E-handel",
    description:
      "Ta din försäljning till nästa nivå med våra e-handelslösningar. Med 14 års erfarenhet kan vi bygga förstklassiga lösningar.",
    link: "e-handel",
  },
  {
    icon: <PiDevicesThin />,
    title: "Appar",
    description:
      "Ta ditt företag till nästa nivå med en egen app. Med cross-plattform appar kan vi använda samma kodbas på appen och hemsidan.",
    link: "appar",
  },
  {
    icon: <PiWrenchThin />,
    title: "Drift och underhåll",
    description:
      "Vi ser till att system vi utvecklar driftas, uppdateras och underhålls. Med supportavtal tar vi ansvaret för er hemsida.",
    link: "drift",
  },
];

class Tjanster extends Component {
  render() {
    let title = "Tjänster",
      description =
        "Vendfox Solutions är en webbyrå som hjälper dig designa och utveckla din webbplats, app eller e-handel. Vi är en heltäckande byrå med mycket bred kompetens. Genom kundnära samarbete, agila arbetssätt och fokus på er verksamhet bygger vi ditt projekt.";
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
              <h2 className="title">{title}</h2>
              <p>{description}</p>
              <div className="service-btn">
                <Link to="/tjanster" className="btn-transparent rn-btn-dark">
                  <span className="text">Läs mer</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-12 mt_md--50">
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                  <Link to={val.link}>
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </Link>
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
