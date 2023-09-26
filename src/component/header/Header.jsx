import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = (
        <img
          src="/assets/images/logo/VENDFOXLOGOscaled.png"
          alt="Vendfox Logo"
        />
      );
    } else if (logo === "dark") {
      logoUrl = (
        <img src="/assets/images/logo/logo-dark.png" alt="Vendfox Logo" />
      );
    } else if (logo === "symbol-dark") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo-symbol-dark.png"
          alt="Vendfox Logo"
        />
      );
    } else if (logo === "symbol-light") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo-symbol-light.png"
          alt="Vendfox Logo"
        />
      );
    } else {
      logoUrl = (
        <img
          src="/assets/images/logo/VENDFOXLOGOCOLOR.png"
          alt="Vendfox Logo"
        />
      );
    }

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link to="/">Hem</Link>
                </li>
                <li>
                  <Link to="/tjanster">Tjänster</Link>
                </li>

                <li>
                  <Link to="/om-oss">Om oss</Link>
                </li>
                <li>
                  <Link to="/blogg">Blogg</Link>
                </li>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </nav>
            <div className="header-phone ">
              <p>
                telefon: 076 275 77 64 <br />
                epost: info@vendfox.com
              </p>
            </div>
            <div className="header-btn">
              {/* Start Humberger Menu  */}
              <div className="humberger-menu d-block d-lg-none pl--20">
                <span
                  onClick={this.menuTrigger}
                  className="menutrigger text-white"
                >
                  <FiMenu />
                </span>
              </div>
              {/* End Humberger Menu  */}
              <div className="close-menu d-block d-lg-none">
                <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                  <FiX />
                </span>
              </div>
            </div>{" "}
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
