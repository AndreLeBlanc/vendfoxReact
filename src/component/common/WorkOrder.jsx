import React, { Component, Fragment } from "react";

const WorkList = [
  {
    icon: "1",
    title: "Konsultation",
    description:
      "Vi hjälper dig att få en tydlig överblick över vad vi kan göra för ditt företags system. Tillsamans spånar vi idéer och pratar om målbilden och hur vi kan ta oss dit.",
  },
  {
    icon: "2",
    title: "Analys",
    description:
      "Våra erfarna utvecklare analyserar ert företag och era behov och presenterar lösningar anpassade för just ert företag. Det är en rolig och spännande fas där vi bollar idéer.",
  },
  {
    icon: "3",
    title: "Design",
    description:
      "Det är viktigt att du får se vad du får innan du slår till. Därför brukar vi göra designen först. Våra designers designar er lösning med er och när arbetet är klart får ni se hur resultatet kommer bli.",
  },
  {
    icon: "4",
    title: "Utveckling",
    description:
      "När designen är klar börjar vi med utvecklingen. Projektledning är alltid i Sverige medan delar av utvecklingen sker i Indien. Vi tror på att jobba nära kunderna och låta projektet växa fram stegvis.",
  },
  {
    icon: "5",
    title: "Utveckling",
    description:
      "När designen är klar börjar vi med utvecklingen. Projektledning är alltid i Sverige medan delar av utvecklingen sker i Indien. Vi tror på att jobba nära kunderna och låta projektet växa fram stegvis.",
  },
  {
    icon: "6",
    title: "Drift",
    description:
      "Vi hjälper givetvis till att drifta och vidareutveckla det vi har byggt. Med ett underhållsavtal från oss så kommer alla servrar och all data endast finnas i Sverige och hanteras härifrån av GDPR skäl.",
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
                  <h2>Så går det till</h2>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              {WorkList.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-2"
                  key={i}
                >
                  <div className="service service__style--3">
                    <div className="iconShort">{val.icon}</div>
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
      </Fragment>
    );
  }
}

export default WorkOrder;
