import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";

const About = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="card-container">
        <div className="">
          <div className="card-container">
            <div className="text-left ml-5 mt-5">
              <div className="p-5 mt-5">
                <h1 className=" text-center mb-2 text-shadow-header">
                  Tietoa Asukasportaali.turku.fi –palvelusta
                </h1>
                <p className="mt-5 ">
                  Asukasportaali on Turun kaupungin ylläpitämä verkkopalvelu,
                  jonka kautta voi varata kaupungin julkisia palveluita sekä
                  seurata hyvinvointia.
                </p>

                <p>
                  Asukasportaali on testausvaiheessa, eikä pilottikäytössä
                  olevassa versiossa ole vielä kaikkia suunnitteilla olevia
                  ominaisuuksia ja toiminnallisuuksia.
                </p>

                <p>
                  Asukasportaalin pilottikäyttö tehdään konsernitasoisessa
                  kehittämisrojektissa, joka on osa Smart and Wise Turku 
                  kärkihanketta. Yhtenä tavoitteena kärkihankkeessa on palvelujen 
                  kustannustehokas järjestäminen uudistamalla kaupungin toimintatapoja 
                  ja hyödyntämällä digitalisaation ja sen tuottaman datan mahdollisuuksia. 
                  Tähän pohjautuen projektin tavoitteena on mm. tilojen ja muiden
                  resurssien käytön tehostaminen, käyttöastetietojen kerääminen
                  ja hyödyntäminen, saavutettavuuden parantaminen ja käyttöön
                  liittyvien kustannusten alentaminen kaupungin varauskäytäntöjä
                  yhtenäistämällä. Pilotoinnilla ja keräämällä
                  käyttäjäkokemuksia pyritään saamaan tietoa asukasportaalin
                  käytettävyydestä, vaikka se onkin kehitteillä.
                </p>

                <p>
                  Toivomme palvelun käyttäjiltä palautetta. Palautetta voit
                  antaa tämän linkin kautta.
                </p>

                <p>
                  Tietosuojaseloste Tietoa Turun kaupungin henkilötietojen
                  käsittelystä sekä tämän palvelun rekisteriselosteet löydät
                  alla olevista osoitteista.
                </p>

                <a href="https://www.turku.fi/tietosuoja">Tietosuojaseloste</a>
                <br></br>
                <br></br>
                <a href="https://rekisteri.turku.fi">Varaus- ja tietokantarekisteri</a>
                <br></br>
                <br></br>
                <a href="https://www.suomi.fi/tietosuojaseloste">Suomi.fi-tunnuksen tietosuojaseloste</a>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
