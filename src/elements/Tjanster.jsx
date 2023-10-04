import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import { FiChevronUp } from "react-icons/fi";
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
import ScrollToTop from "react-scroll-up";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import App from "../component/common/App";

const ServiceList = [
  {
    icon: <PiFigmaLogoThin />,
    title: "Design",
    description:
      "Våra erfarna designers analyserar ert företag och era behov och designar hemsidor som är både funktionella och snygga. Ni bollar idéer för att skapa en hemsida för er.",
  },
  {
    icon: <PiBrowsersThin />,
    title: "Webbplattformar",
    description:
      "Skräddarsydda lösningar och anpassningar. Vill integrera ett affärssystem eller bygga ett anpassat system för ditt företag så kan våra programmerare skapa det.",
  },
  {
    icon: <PiWrenchThin />,
    title: "Drift och underhåll",
    description:
      "Samarbetet fortsätter långt efter att uppdraget är klart. Drift, underhåll och support erbjuds löpande. Alla servrar och all data hanteras endast från Sverige av GDPR skäl.",
  },
  {
    icon: <FaWordpressSimple />,
    title: "Wordpress",
    description:
      "Design, Utveckling och drift av wordpress-sidor. Wordpress är en enkel lösning för att snabbt bygga hemsidor för små och medelstora företag.",
  },
  {
    icon: <TbPlug />,
    title: "Plugins och drift",
    description:
      "Utveckling av plugins och moduler till existerande hemsidor. Vi hjälper både företag och byråer bygga ny funktionalitet på existerande hemsidor.",
  },
  {
    icon: <PiChartLineUpThin />,
    title: "SEO",
    description:
      "Optimering av hemsidor så att den rankas högre på googles sökresultat. Genom att förbättra din hemsida driver vi trafik och affärer till din hemsida.",
  },
  {
    icon: <PiDevicesThin />,
    title: "Cross-plattform appar",
    description:
      "Cross-platform för mobil apputveckling betyder utveckling av applikationer som kan köras på flera mobilplattformar (iOS och Google Play) med hjälp av samma kodbas. Det snabbar på utvecklingen och sänker kostnaden.",
  },
  {
    icon: <PiStorefrontThin />,
    title: "E-handel",
    description:
      "Vårt team har varit delaktiga i hundratals e-handelsprojekt. Vi kan bygga allt från enklare lösningar i woocommerce till skräddarsydda lösningar. Maximera försäljningen och minimerar arbetet med integrationer med betal och affärssystem.",
  },
  {
    icon: <PiChalkboardTeacherThin />,
    title: "Projektledning",
    description:
      "Med vår omfattande erfarenhet av IT-projekt kan vi hjälpa er leda era IT-projekt. Vi är vana vid att både vara beställare och leverantör och kan skriva kravspecifikationer, designa system och bistå med upphandlingar.",
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
        <App
          erbjudande="Vendfox är en erfaren webbyrå som kan erbjuda ett brett utbud av tjänster.
Vi kan erbjuda helhetslösningar där vi sköter alla aspekter av er närvaro på internet."
        />
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
