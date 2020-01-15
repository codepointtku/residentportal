import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-light">
        Asukasportaali - <br></br>Kaikki tietosi samassa paikassa
      </h1>
      <h5 className="text-light  ">
        Asukasportaalista voit tarkistaa esimerkiksi kirjastolainasi,<br></br>
        lääkäriasiointisi ja bussikorttisi voimassaoloajat.
      </h5>
      <button type="button" className="btn btn-dark text-uppercase">
        Kirjaudu asukasportaaliin
      </button>
    </div>
  );
};
export default Home;
