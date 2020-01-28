import React from "react";
import { Link } from "react-router-dom";

const Home = img => {
  return (
    <div className="container-img">
      <div className="p-5">
        <div className="container">
          <div className="text-left ml-1 mt-5">
            <h1 className="text-light ml-1 text-shadow">
              Asukasportaali - <br></br>Kaikki tietosi samassa paikassa
            </h1>

            <h5 className="text-light ml-1 mt-4 text-shadow">
              Asukasportaalista voit tarkistaa esimerkiksi kirjastolainasi,
              <br></br>
              lääkäriasiointisi ja bussikorttisi voimassaoloajat.
            </h5>
            <Link
              to="/login"
              role="button"
              type="button"
              className="ml-1 mt-5 btn btn-dark active text-uppercase text-shadow"
              aria-pressed="true"
              aria-label="Nappi"
            >
              Kirjaudu asukasportaaliin
            </Link>
            <div className="p-5 mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
