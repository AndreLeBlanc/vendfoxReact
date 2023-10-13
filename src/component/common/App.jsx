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
    icon: <PiFigmaLogoThin />,
    title: "Design",
    description:
      "Våra erfarna designers analyserar ert företag och era behov och designar hemsidor som är både funktionella och snygga. Ni bollar idéer för att skapa en hemsida för er.",
    link: "/Design",
  },
  {
    icon: <PiBrowsersThin />,
    title: "Webbutveckling",
    description:
      "Skräddarsydda lösningar och anpassningar. Vill integrera ett affärssystem eller bygga ett anpassat system för ditt företag så kan våra programmerare skapa det.",
    link: "/webbutveckling",
  },
  {
    icon: <PiWrenchThin />,
    title: "Drift och underhåll",
    description:
      "Samarbetet fortsätter långt efter att uppdraget är klart. Drift, underhåll och support erbjuds löpande. Alla servrar och all data hanteras endast från Sverige av GDPR skäl.",
    link: "/",
  },
  {
    icon: <FaWordpressSimple />,
    title: "Wordpress",
    description:
      "Design, Utveckling och drift av wordpress-sidor. Wordpress är en enkel lösning för att snabbt bygga hemsidor för små och medelstora företag.",
    link: "/Wordpress",
  },
  {
    icon: <TbPlug />,
    title: "Plugins",
    description:
      "Utveckling av plugins och moduler till existerande hemsidor. Vi hjälper både företag och byråer bygga ny funktionalitet på existerande hemsidor.",
    link: "/Wordpress",
  },
  {
    icon: <PiChartLineUpThin />,
    title: "SEO",
    description:
      "Optimering av hemsidor så att den rankas högre på googles sökresultat. Genom att förbättra din hemsida driver vi trafik och affärer till din hemsida.",
    link: "/",
  },
  {
    icon: <PiDevicesThin />,
    title: "Cross-plattform appar",
    description:
      "Cross-platform för mobil apputveckling betyder utveckling av applikationer som kan köras på flera mobilplattformar (iOS och Google Play) med hjälp av samma kodbas. Det snabbar på utvecklingen och sänker kostnaden.",
    link: "/Appar",
  },
  {
    icon: <PiStorefrontThin />,
    title: "E-handel",
    description:
      "Vårt team har varit delaktiga i hundratals e-handelsprojekt. Vi kan bygga allt från enklare lösningar i woocommerce till skräddarsydda lösningar. Maximera försäljningen och minimerar arbetet med integrationer med betal och affärssystem.",
    link: "/e-handel",
  },
  {
    icon: <PiChalkboardTeacherThin />,
    title: "Projektledning",
    description:
      "Med vår omfattande erfarenhet av IT-projekt kan vi hjälpa er leda era IT-projekt. Vi är vana vid att både vara beställare och leverantör och kan skriva kravspecifikationer, designa system och bistå med upphandlingar.",
    link: "/projektledning",
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
                  <h2>{this.props.title}</h2>
                  <p>
                    Vendfox är en erfaren webbyrå som kan erbjuda ett brett
                    utbud av tjänster. <br />
                    Vi kan erbjuda helhetslösningar där vi sköter alla aspekter
                    av er närvaro på internet.
                  </p>
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
      </Fragment>
    );
  }
}

export default App;
