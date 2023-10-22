import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {this.props.pageTitle} || erfarna webb, app och e-handelsutvecklare{" "}
          </title>
          <meta
            name="description"
            content="IT-konsultbyrå som hjälper små och mellanstora företag med appar, hemsidor, affärssystem och e-handel."
          />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
