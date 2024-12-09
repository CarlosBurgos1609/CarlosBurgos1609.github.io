import './../Style/style.scss';
import Mylogo from './../img/Mylogo.png'
import ratatype from './../img/ratatype.png'
import ratatypecr from './../img/certificates/ratatypecr.png'
// import './Style/style.scss';


function Certificates() {
  return (
    <body>
      <section class="containers">
        <section class="certificates">
        <div class="logo">
          <a href="https://www.ratatype.es/u5891306/certificate/es/"target='_blank'><img src={ratatype} alt="" /></a>
          <h1>Ratatype</h1>
        </div>
        <div class="ratatype">
          <a href="https://www.ratatype.es/u5891306/certificate/es/" target='_blank'></a><img src={ratatypecr} alt="Ratatype" />
        </div>
        </section>
      </section>
    </body >
  );
}
export default Certificates;