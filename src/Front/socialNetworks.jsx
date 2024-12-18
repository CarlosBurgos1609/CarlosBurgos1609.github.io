import './../Style/style.scss';
import Mylogo from './../img/logos/Mylogo.png'
// import './Style/style.scss';


function SocialNetworks() {
  return (
    <body>
      <section class="containers container1">
        <h1>Logo y Definción</h1>
        <div class="log">
          <div class="logo"><img src={Mylogo} alt="logo" /></div>
          <div class="text">
            <p>Mi logo representa la unión de diferentes facetas de mi personalidad. El círculo azul simboliza mi integridad
            </p>
            
            
          </div>

        </div>
      </section>
    </body >

  );
}
export default SocialNetworks;