import React, { Fragment } from "react";
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
      "Våra erfarna designers analyserar ert företag och era behov och designar hemsidor som är både funktionella och snygga. Vi bollar idéer med er för att skapa er hemsida.",
    link: "/design",
  },
  {
    icon: <PiBrowsersThin />,
    title: "Webbutveckling",
    description:
      "Skräddarsydda hemsidor med bra design. Våra webbutvecklare kan integrera ett betalsystem eller bygga en webbplattform men den funktionaliteten ert företag behöver.",
    link: "/webbutveckling",
  },
  {
    icon: <PiWrenchThin />,
    title: "Drift och underhåll",
    description:
      "Samarbetet fortsätter långt efter att uppdraget är klart. Drift, underhåll och support erbjuds löpande. Alla servrar och all data hanteras endast från Sverige av GDPR skäl.",
    link: "/drift",
  },
  {
    icon: <FaWordpressSimple />,
    title: "Wordpress",
    description:
      "Design, utveckling och drift av wordpresshemsidor. Wordpress är en enkel lösning för att snabbt bygga hemsidor för små och medelstora företag.",
    link: "/wordpress",
  },
  {
    icon: <TbPlug />,
    title: "Plugins",
    description:
      "Utveckling av plugins och moduler till existerande hemsidor. Vi hjälper både företag och byråer bygga ny funktionalitet på existerande hemsidor.",
    link: "/plugins",
  },
  {
    icon: <PiChartLineUpThin />,
    title: "SEO",
    description:
      "Optimering av hemsidor så att de rankas högre på googles sökresultat. Genom att vi optimerar din hemsida driver vi trafik och affärer till din hemsida.",
    link: "/seo",
  },
  {
    icon: <PiDevicesThin />,
    title: "Cross-plattform appar",
    description:
      "Cross-platform för mobil apputveckling betyder utveckling av applikationer som kan köras på flera mobilplattformar (iOS och Android) med samma kodbas. Det snabbar på utvecklingen, förenklar driften och sänker kostnaden.",
    link: "/appar",
  },
  {
    icon: <PiStorefrontThin />,
    title: "E-handel",
    description:
      "Vårt team har varit delaktiga i hundratals e-handelsprojekt. Vi bygger allt från enklare lösningar i woocommerce till skräddarsydda webbutiker. Öka försäljningen och minimerar arbetet med integrationer för betal och affärssystem.",
    link: "/e-handel",
  },
  {
    icon: <PiChalkboardTeacherThin />,
    title: "Projektledning",
    description:
      "Med vår omfattande erfarenhet av projektledning kan vi hjälpa er leda era IT-projekt. Vi är vana vid att både vara beställare och leverantör. Vi kan skriva kravspecifikationer, designa system och bistå med era upphandlingar.",
    link: "/projektledning",
  },
];
export default function App() {
  return (
    <Fragment>
      <div className="service-area creative-service-wrapper pt--60 pb--60 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h2>{this.props.title}</h2>
                <p>
                  Vendfox är en erfaren webbyrå som kan erbjuda ett brett utbud
                  av tjänster. <br />
                  Vi kan erbjuda helhetslösningar där vi sköter alla aspekter av
                  er närvaro på internet.
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
