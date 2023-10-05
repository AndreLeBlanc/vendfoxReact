import React, { Component, Fragment } from "react";

const WorkList = [
  {
    icon: "1",
    title: "Analys",
    description:
      "Våra erfarna designers analyserar ert företag och era behov och designar hemsidor som är både funktionella och snygga. Ni bollar idéer för att skapa en hemsida för er.",
  },
  {
    icon: "1",
    title: "Analys",
    description:
      "Våra erfarna designers analyserar ert företag och era behov och designar hemsidor som är både funktionella och snygga. Ni bollar idéer för att skapa en hemsida för er.",
  },
  {
    icon: "1",
    title: "Analys",
    description:
      "Våra erfarna designers analyserar ert företag och era behov och designar hemsidor som är både funktionella och snygga. Ni bollar idéer för att skapa en hemsida för er.",
  },
  {
    icon: "1",
    title: "Analys",
    description:
      "Våra erfarna designers analyserar ert företag och era behov och designar hemsidor som är både funktionella och snygga. Ni bollar idéer för att skapa en hemsida för er.",
  },
];

class WorkOrder extends Component {
  render() {
    return (
      <Fragment>
        <div className="service-area creative-service-wrapper pt--60 pb--60 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>Vår process</h2>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div
                className="col-lg-8
               col-12 mt_md--50"
              >
                <div className="row service-one-wrapper">
                  {WorkList.map((val, i) => (
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                      <div className="service service__style--2">
                        <div className="icon">{val.icon}</div>
                        <div className="content">
                          <h3 className="title">{val.title}</h3>
                          <p>{val.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default WorkOrder;
