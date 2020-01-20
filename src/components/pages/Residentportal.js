import React from "react";
import { Fragment } from "react";
import Logo from "./kuva.jpg";

const Residentportal = () => {
  return (
    <Fragment>
      <section>
  <div class="container">
    <div class="card">
      <div class="row">
        <div class="col-md-6">
          <div class="card-block">
            <h4 class="card-title">HENKILÖTIEDOT</h4>
            <table class="table table-striped">
 
 <tbody>
   <tr>
     <td scope="row" className='font-weight-bold'>Nimi</td>
     <td>Minna Aliisa Föri</td>
   </tr>
   <tr>
     <th scope="row">Henkilötunnus</th>
     <td>010180-xxxx</td>
   </tr>
   <tr>
     <td scope="row" className='font-weight-bold'>Sukupuoli</td>
     <td>Nainen</td>
   </tr>
   <tr>
     <th scope="row">Sivilisääty</th>
     <td>naimisissa</td>
   </tr>
   <tr>
     <td scope="row" className='font-weight-bold'>Kotiosoite</td>
     <td>Förikatu 1, 20810 Turku</td>
   </tr>
   <tr>
     <th scope="row">Sähköposti</th>
     <td>minna@gmail.com</td>
   </tr>
   <tr>
     <td scope="row" className='font-weight-bold'>Puhelin</td>
     <td>+358 50 123 4567</td>
   </tr>
   <tr>
     <th scope="row">Kansalaisuus</th>
     <td>Suomen</td>
   </tr>
   <tr>
     <td scope="row " className='font-weight-bold'>Äidinkieli</td>
     <td>Suomi</td>
   </tr>
 </tbody>
</table>
            
          </div>
        </div>
        <div class="col-md-6">
          <div class="card-img-top-right " >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="buttonLink">
<button type="button" className="btn btn-link">Primary</button>
</div>
    </Fragment>
  );
};

export default Residentportal;
