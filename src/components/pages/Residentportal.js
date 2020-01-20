import React from "react";
import { Fragment } from "react";
import Logo from "./kuva.jpg";

const Residentportal = () => {
  return (
    <Fragment>
      <section>
        <div className="card-container">
          <div class="card">
            <div class="row">
              <div class="col-sm-6">
                <div class="card-block">
                  <h4 class="card-title">HENKILÖTIEDOT</h4>
                  <table class="table table-striped">
                    <tbody>
                      <tr>
                        <td scope="row" className="font-weight-bold">
                          Nimi
                        </td>
                        <td>Minna Aliisa Föri</td>
                      </tr>
                      <tr>
                        <th scope="row">Henkilötunnus</th>
                        <td>010180-xxxx</td>
                      </tr>
                      <tr>
                        <td scope="row" className="font-weight-bold">
                          Sukupuoli
                        </td>
                        <td>Nainen</td>
                      </tr>
                      <tr>
                        <th scope="row">Sivilisääty</th>
                        <td>naimisissa</td>
                      </tr>
                      <tr>
                        <td scope="row" className="font-weight-bold">
                          Kotiosoite
                        </td>
                        <td>Förikatu 1, 20810 Turku</td>
                      </tr>
                      <tr>
                        <th scope="row">Sähköposti</th>
                        <td>minna@gmail.com</td>
                      </tr>
                      <tr>
                        <td scope="row" className="font-weight-bold">
                          Puhelin
                        </td>
                        <td>+358 50 123 4567</td>
                      </tr>
                      <tr>
                        <th scope="row">Kansalaisuus</th>
                        <td>Suomen</td>
                      </tr>
                      <tr>
                        <td scope="row " className="font-weight-bold">
                          Äidinkieli
                        </td>
                        <td>Suomi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="card-img-top-right "></div>
                <div className="card-text-right">
                  <button className="btn card-btn btn-primary text-aling-right">
                    <a href="#">Tietoluvat </a>
                  </button>
                </div>
                <div className="card-text-right">
                  <button className="btn card-btn1 btn-primary text-aling-right">
                    <a href="#">valtuutukset</a>
                  </button>
                </div>
                <div className="card-text-right">
                  <button className="btn card-btn1 btn-primary text-aling-right">
                    <a href="#">Henkilötiedot</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card float-right ">
            <img
              className="card-img-top-right"
              src="..."
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Residentportal;
