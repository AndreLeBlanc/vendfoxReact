import React from "react";
import ContactForm from "./ContactForm";

export default function ContactTwo() {
  return (
    <div className="contact-form--1">
      <div className="container">
        <div className="row row--35 align-items-start">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title">Kontakta oss.</h2>
              <p className="description">
                Vi diskuterar gärna era idéer och planer med er. Tveka inte, hör
                av er!
              </p>
            </div>
            <div className="form-wrapper">
              <ContactForm />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail mb_md--30 mb_sm--30">
              <img
                src="/assets/images/team/AndreChess.jpg"
                alt="Andre at Vendfox"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
