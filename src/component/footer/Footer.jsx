import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

const SocialShare = [
  //{ Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/vendfox/",
  },
  //  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  //  { Social: <FaTwitter />, link: "https://twitter.com/" },
];

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>Låt oss bygga dina IT-lösningar</span>
                    <h2>
                      Boka en gratis
                      <br /> konsultation
                    </h2>
                    <a className="rn-button-style--2" href="/kontakt">
                      <span>Kontakta oss</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4>Läs mer</h4>
                        <ul className="ft-link">
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
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Kontakta oss</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="mailto:info@vendfox.com">
                              Epost: info@vendfox.com
                            </a>
                          </li>
                        </ul>
                        <div className="footer-text-div">
                          <p className="footer-text">Telefon: 076 275 77 64</p>
                        </div>
                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>
                          Copyright © 2023 Vendfox Solutions AB. All Rights
                          Reserved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
