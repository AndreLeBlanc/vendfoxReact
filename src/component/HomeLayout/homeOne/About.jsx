import React from "react";

export default function OmOss() {
  return (
    <React.Fragment>
      <div className="about-wrapper">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="thumbnail">
                <img
                  className="w-100"
                  src="/assets/images/team/agnes.jpg"
                  alt="About Images"
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-inner inner">
                <div className="section-title">
                  <h2 className="title">
                    {" "}
                    Vi skapar era <br />
                    IT-lösningar
                  </h2>
                  <p className="description">
                    Välkommen till Vendfox, en webbyrå som jobbar lite
                    annorlunda, lite bredare och innovativare med
                    webbutveckling, e-handel och appar. Vi hjälper dig hela
                    vägen med att skapa IT-lösningarna som driver ditt företag
                    framåt. <br />
                    Med en bred erfarenhet inom IT kan vi designa, utveckla och
                    drifta era webbplattformar. Med vendfox tar vi
                    helhetsansvaret och låter dig fokusera på din verksamhet.
                    IT-sidan ska bara fungera.{" "}
                  </p>
                </div>
                <div className="row mt--30 mt_sm--10">
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about-us-list">
                      <h3 className="title">Vi kan:</h3>
                      <p>
                        Bygga en webbplats, e-handel eller app. Ta era
                        existerande system till nästa nivå. Få er att växa,
                        förbättra eller förändra er verksamhet med bättre
                        verktyg och system.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about-us-list">
                      <h3 className="title">Om oss</h3>
                      <p>
                        Vendfox är baserat i Uppsala, Stockholm och Tranås med
                        kunder runt om i landet. Tack vare vårt kontaktnät i
                        Indien kan vi ta in väl valda utvecklare som blir en del
                        av vårt team.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
