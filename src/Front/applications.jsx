import './../Style/style.scss';
import Mylogo from './../img/Mylogo.png'
import spotify from './../img/spotify.png'
import inProcess from './../img/inProcess.png'
import bici from './../img/bici.png'
// import './Style/style.scss';


function Aplicactions() {
  return (
    <div>
      <body>
        <section class="containers">
          <section class="aplications">
            <h1>Aplicaciones Realizadas</h1>
            <div class="log">
              <a href="https://bici-parqueadero.up.railway.app/" target='_blank'><img src={bici} alt="" /></a>
              <img src={inProcess} alt="InProcess" />
            </div>
          </section>
        </section>
      </body >
    </div>
  );
}
export default Aplicactions;