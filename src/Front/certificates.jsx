import './../Style/style.scss';
import ratatype from './../img/logos/ratatype.png'
import ratatypecr from './../img/certificates/ratatypecr.png'
import senacr from './../img/certificates/sena.png'
import scrumcr from './../img/certificates/scrum.png'
import sena from './../img/logos/sena.png'
import scrum from './../img/logos/scrum.png'



function Certificates() {
  return (
    <body>
      <section class="containers">
        <section class="certificates">
        <div class="logo">
          <a href="https://www.ratatype.es/u5891306/certificate/es/"target='_blank'><img src={ratatype} alt="" /></a>
          <h1>Ratatype</h1>
        </div>
        <div class="certificate">
          <a href="https://www.ratatype.es/u5891306/certificate/es/" target='_blank'></a><img src={ratatypecr} alt="Ratatype" />
        </div>
        </section>
        <section class="certificates">
        <div class="logo">
          <a href="http://senasofiaplus.edu.co/sofia-public/"target='_blank'><img src={sena} alt="" /></a>
          <h1>SENA</h1>
        </div>
        <div class="certificate">
          <a href="http://senasofiaplus.edu.co/sofia-public/" target='_blank'></a><img src={senacr} alt="Ratatype" />
        </div>
        </section>
        <section class="certificates">
        <div class="logo">
          <a href="#"target='_blank'><img src={scrum} alt="" /></a>
          <h1>ScrumStudy</h1>
        </div>
        <div class="certificate">
          <a href="https://www.scrumstudy.com/" target='_blank'></a><img src={scrumcr} alt="Ratatype" />
        </div>
        </section>
      </section>
    </body >
  );
}
export default Certificates;