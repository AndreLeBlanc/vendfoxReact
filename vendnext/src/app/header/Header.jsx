import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
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
    const { color = "default-color" } = this.props;
    let logoUrl;
    logoUrl = (
      <img src="/assets/images/logo/VENDFOXLOGOscaled.png" alt="Vendfox Logo" />
    );

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left flex-1">
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
                <li className="has-droupdown">
                  <Link to="/tjanster">Tjanster</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/design">Design</Link>
                    </li>
                    <li>
                      <Link to="/webbutveckling">Webbutveckling</Link>
                    </li>
                    <li>
                      <Link to="/drift">Drift</Link>
                    </li>
                    <li>
                      <Link to="/wordpress">Wordpress</Link>
                    </li>
                    <li>
                      <Link to="/plugins">Plugins</Link>
                    </li>
                    <li>
                      <Link to="/seo">Seo</Link>
                    </li>
                    <li>
                      <Link to="/appar">Appar</Link>
                    </li>
                    <li>
                      <Link to="/e-handel">E-handel</Link>
                    </li>
                    <li>
                      <Link to="/projektledning">Projektledning</Link>
                    </li>
                  </ul>
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
          <div className="header-phone d-none d-xl-block">
            <p className="flex-1">
              telefon: 076 275 77 64 <br />
              epost: info@vendfox.com
            </p>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
