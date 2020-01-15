import React from "react";

const Home = () => {
  return (
    <div className="p-5 mt-5">
      <div className="container">
        <div className="text-left ml-1 mt-5">
          <h1 className="text-light ml-1">
            Asukasportaali - <br></br>Kaikki tietosi samassa paikassa
          </h1>

          <h5 className="text-light ml-1 mt-4">
            Asukasportaalista voit tarkistaa esimerkiksi kirjastolainasi,
            <br></br>
            lääkäriasiointisi ja bussikorttisi voimassaoloajat.
          </h5>
          <a
            href="/residentportal"
            role="button"
            type="button"
            className="ml-1 mt-5 btn btn-dark active text-uppercase"
            aria-pressed="true"
          >
            Kirjaudu asukasportaaliin
          </a>
          <div className="p-5 mt-5"></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
