import { Link } from "react-router-dom";
import React, { Component } from "react";

class BrandTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="brand-style-2">
          <li>
            <Link to="/webbutveckling">
              <img
                src="/assets/images/techs/nodejs.svg"
                alt="Vendfox uses nodejs"
              />
            </Link>
          </li>
          <li>
            <Link to="/wordpress">
              <img
                src="/assets/images/techs/Wordpress-Vendfox.svg"
                alt="vendfox uses wordpress"
              />
            </Link>
          </li>
          <li>
            <Link to="/webbutveckling">
              <img
                src="/assets/images/techs/React_Logo.svg"
                alt="Vendfox uses React"
              />
            </Link>
          </li>
          <li>
            <Link to="/webbutveckling">
              <img
                src="/assets/images/techs/Vue_Vendfox.svg"
                alt="Vendfox uses Vue"
              />
            </Link>
          </li>
          <li>
            <Link to="/webbutveckling">
              <img
                src="/assets/images/techs/laravel_Vendfox.svg"
                alt="Vendfox uses laravel"
              />
            </Link>
          </li>
          <li>
            <Link to="/webbutveckling">
              <img
                src="/assets/images/techs/python-Vendfox.svg"
                alt="Vendfox uses Python"
              />
            </Link>
          </li>
          <li>
            <Link to="/e-handel">
              <img
                src="/assets/images/techs/shopify.svg"
                alt="Vendfox uses shopify"
              />
            </Link>
          </li>
          <li>
            <Link to="/e-handel">
              <img
                src="/assets/images/techs/WooCommerce_vendfox.svg"
                alt="Vendfox uses woocommerce"
              />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                src="/assets/images/techs/amazon-web-services-vendfox.svg"
                alt="Vendfox uses AWS"
              />
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
export default BrandTwo;
