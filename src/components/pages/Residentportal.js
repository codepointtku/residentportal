import React, { Fragment } from "react";
import Logo from "./kuva.jpg";

const Residentportal = () => {
  return (
    <Fragment>
      <section>
        <div className="card-container">
          <div className="card">
            <div className="row">
              <div className="col-sm-6">
                <div className="card-block">
                  <h4 className="card-title">HENKILÖTIEDOT</h4>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td className="font-weight-bold">Nimi</td>
                        <td>Minna Aliisa Föri</td>
                      </tr>
                      <tr>
                        <th>Henkilötunnus</th>
                        <td>010180-xxxx</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Sukupuoli</td>
                        <td>Nainen</td>
                      </tr>
                      <tr>
                        <th scope="row">Sivilisääty</th>
                        <td>naimisissa</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Kotiosoite</td>
                        <td>Förikatu 1, 20810 Turku</td>
                      </tr>
                      <tr>
                        <th scope="row">Sähköposti</th>
                        <td>minna@gmail.com</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Puhelin</td>
                        <td>+358 50 123 4567</td>
                      </tr>
                      <tr>
                        <th scope="row">Kansalaisuus</th>
                        <td>Suomen</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Äidinkieli</td>
                        <td>Suomi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-sm-6">
                <img src={Logo} alt="Kuva" className="card-img-top-right"></img>
                <div className="card-text-right">
                  <button className="btn card-btn btn-primary text-aling-right">
                    <a href="/">Tietoluvat </a>
                  </button>
                </div>
                <div className="card-text-right">
                  <button className="btn card-btn1 btn-primary text-aling-right">
                    <a href="/">valtuutukset</a>
                  </button>
                </div>
                <div className="card-text-right">
                  <button className="btn card-btn1 btn-primary text-aling-right">
                    <a href="/">Henkilötiedot</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-left">
            <div className="row">
              <div className="col-sm-6">
                <div className="card-block">
                  <h4 className="card-title">HENKILÖTIEDOT</h4>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td className="font-weight-bold">Nimi</td>
                        <td>Minna Aliisa Föri</td>
                      </tr>
                      <tr>
                        <th>Henkilötunnus</th>
                        <td>010180-xxxx</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Sukupuoli</td>
                        <td>Nainen</td>
                      </tr>
                      <tr>
                        <th scope="row">Sivilisääty</th>
                        <td>naimisissa</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Kotiosoite</td>
                        <td>Förikatu 1, 20810 Turku</td>
                      </tr>
                      <tr>
                        <th scope="row">Sähköposti</th>
                        <td>minna@gmail.com</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Puhelin</td>
                        <td>+358 50 123 4567</td>
                      </tr>
                      <tr>
                        <th scope="row">Kansalaisuus</th>
                        <td>Suomen</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Äidinkieli</td>
                        <td>Suomi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-sm-6">
                <img src={Logo} alt="Kuva" className="card-img-top-right"></img>
                <div className="card-text-right">
                  <button className="btn card-btn btn-primary text-aling-right">
                    <a href="/">Tietoluvat </a>
                  </button>
                </div>
                <div className="card-text-right">
                  <button className="btn card-btn1 btn-primary text-aling-right">
                    <a href="/">valtuutukset</a>
                  </button>
                </div>
                <div className="card-text-right">
                  <button className="btn card-btn1 btn-primary text-aling-right">
                    <a href="/">Henkilötiedot</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Residentportal;
