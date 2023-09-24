import React, { Component, Fragment } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

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
        <div className="row">
          {Data.map((value, index) => (
            <div
              className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12"
              key={index}
            >
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
