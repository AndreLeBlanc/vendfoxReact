import React from "react";
import { Helmet } from "react-helmet";

export default function PageHelmet(props) {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          {props.pageTitle} || erfarna webb, app och e-handelsutvecklare{" "}
        </title>
        <meta
          name="description"
          content="IT-konsultbyrå som hjälper små och mellanstora företag med appar, hemsidor, affärssystem och e-handel."
        />
      </Helmet>
    </React.Fragment>
  );
}
