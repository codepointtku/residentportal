import React from "react";

const Home = () => {
  return (
    <div className="container ">
      <div classname="text-center">
        <h1 className="text-light">
          Asukasportaali - <br></br>Kaikki tietosi samassa paikassa
        </h1>

        <h5 className="text-light  ">
          Asukasportaalista voit tarkistaa esimerkiksi kirjastolainasi,<br></br>
          lääkäriasiointisi ja bussikorttisi voimassaoloajat.
        </h5>
        <button type="button" class="btn btn-dark text-uppercase">
          Kirjaudu asukasportaaliin
        </button>
      </div>
    </div>
  );
};
export default Home;
