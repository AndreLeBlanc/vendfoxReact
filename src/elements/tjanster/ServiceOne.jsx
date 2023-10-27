import React from "react";

const ServiceList = [
  {
    icon: "03",
    title: "Vi bygger era IT-lösningar",
    description:
      "Med ett erfaret team av IT-konsulter kan vi digitalisera ert företag med hemsidor, appar och e-handel.",
  },
  {
    icon: "01",
    title: "Liten konsultbyrå i stort format",
    description:
      "Vendfox har erbjuder de stora konsultbolagens tjänster till ett litet konsultbolags pris.",
  },
  {
    icon: "02",
    title: "Uppsala, Stockholm och Tranås",
    description:
      "Vi jobbar med kunder och utvecklare på olika håll men finns lokalt i Uppsala, Stockholm och Tranås.",
  },
];

export default function ServiceOne() {
  return (
    <React.Fragment>
      <div className="row">
        {ServiceList.map((val, i) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 " key={i}>
            <div className="service service__style--1 mt--90 lg:mt--50">
              <div className="icon">
                <img
                  src={`/assets/images/icons/icon-${val.icon}.png`}
                  alt="Vendfox Tjänster"
                />
              </div>
              <div className="content">
                <h4 className="title">{val.title}</h4>
                <p>{val.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
