import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";

const Aspa = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="container1">
        <div className="">
          <div className="container1">
            <div className="text-left ml-5 mt-5">
              <div className="p-5 mt-5">
                <h1 className=" text-center mb-2 text-shadow-header">
                  Asukasportaalin palveluohjauksen chat
                </h1>
                <p className="mt-5 ">
                  Asukasportaalin palveluohjauksen chatista voit kysyä: -
                  Ohjeita asukasportaalin käyttämiseen - Yhteystiedoista -
                  Yleisiä kysymyksiä asumisportaaliin liittyen
                </p>

                <p>
                  Asukasportaalin palveluohjauksen chat palvelee arkisin klo
                  9-15. Huomioithan, että palvelemme asiakkaitamme samaan aikaan
                  myös puhelimitse. Emme aina ehdi vastaamaan chatissa
                  esitettyihin kysymyksiin.
                </p>

                <p>
                  Halutessasi voit saada käymäsi chat-keskustelun omaan
                  sähköpostiisi. Mikäli kaikki palveluneuvojat ovat varattuja,
                  näet jonotilanteen chat-ikkunan alareunassa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Aspa;
