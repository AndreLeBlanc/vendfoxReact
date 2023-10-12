import React, { Component, Fragment } from "react";

class CounterOne extends Component {
  state = {
    didViewCountUp: false,
  };
  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };
  render() {
    let Data = [
      {
        countNum: "Iterativt",
        countTitle:
          "Vi låter lösningarna växa fram stegvis med regelbunden feedback från kund.",
      },
      {
        countNum: "Fast pris",
        countTitle:
          "Vi tar inte betalt per timme utan per projekt. Ni får ett garanterat fastpris.",
      },
      {
        countNum: "Långsiktigt",
        countTitle:
          "Vi fortsätter att drifta, underhålla och vidareutveckla era system långsiktigt.",
      },
    ];

    return (
      <Fragment>
        <div className="row justify-end">
          {Data.map((value, index) => (
            <div className="counterup_style--1 col-xl-4 col-12" key={index}>
              <h5 className="counter">{value.countNum}</h5>
              <p className="description">{value.countTitle}</p>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
export default CounterOne;
