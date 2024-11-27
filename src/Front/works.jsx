import './../Style/style.scss';
import Mylogo from './../img/Mylogo.png'
import spotify from './../img/spotify.png'
// import './Style/style.scss';


function Works() {
    return (<div>
        <div class="part">
        <p>   cab</p>
      </div>
        <body>
      
      <section class="containers container1">
        <h1>Logo y Definción</h1>
        <div class="log">
          <div class="logo"><img src={Mylogo} alt="logo" /></div>
          <div class="text">
            <p>Mi logo representa la unión de diferentes facetas de mi personalidad. El círculo azul simboliza mi integridad
              y la búsqueda de un equilibrio en mi vida. Los triángulos, con su forma sólida y ascendente, representan mis
              ambiciones y mi constante crecimiento. El semicírculo, que se abre hacia el futuro, simboliza mi deseo de
              explorar nuevas oportunidades. La combinación de estas formas refleja mi nombre, Carlos Alexander Burgos
              Jaramillo, donde cada elemento visual representa una parte esencial de quién soy.
            </p>
          </div>

        </div>
      </section>
    </body >
    </div>
    );
}
export default Works;