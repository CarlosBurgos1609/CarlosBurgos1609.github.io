import logo from './img/logo.svg';
import './Style/style.scss';
import Mylogo from './img/Mylogo.png'
import menu from './img/menu.png'
// import './Style/style.scss';


function App() {
  return (
    <body>
      <div class="content">
        <header class="header">
          <div class="logo">
            <a href="index.html">
              <img src={Mylogo} className="App-logo" alt="logo" />
            </a>
          </div>
          <div class="menu container ">

            <input type="checkbox" id="menu" />
            <label for="menu">
              <img src={menu} alt="icon-menu" class='App-logo' />
            </label>

            <nav class="nav-list">
              <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="#">Aplicaciones</a></li>
                <li><a href="#">Certificados</a></li>
                <li><a href="#">Trabajos</a></li>
                <li><a href="Front/contacts.html">Contactos</a></li>
                <a href="#" class="btn"><button class="rounded">Iniciar sesión</button></a>
                <a href="#" class="btn"><button class="rounded">Registrarse</button></a>
              </ul>
            </nav>

          </div>

        </header>

      </div>
      <div class="part">
        <p>   cab</p>
      </div>
      <section class="containers container1">
        <h1>Logo y Definción</h1>
        <img src={Mylogo} alt="logo" />
        <p>Mi logo representa la unión de diferentes facetas de mi personalidad. El círculo azul simboliza mi integridad
          y la búsqueda de un equilibrio en mi vida. Los triángulos, con su forma sólida y ascendente, representan mis
          ambiciones y mi constante crecimiento. El semicírculo, que se abre hacia el futuro, simboliza mi deseo de
          explorar nuevas oportunidades. La combinación de estas formas refleja mi nombre, Carlos Alexander Burgos
          Jaramillo, donde cada elemento visual representa una parte esencial de quién soy.
        </p>
      </section>
      <section class="containers container1">
        <h1>Logo y Definción</h1>
        <img src={Mylogo} alt="logo" />
        <p>Mi logo representa la unión de diferentes facetas de mi personalidad. El círculo azul simboliza mi integridad
          y la búsqueda de un equilibrio en mi vida. Los triángulos, con su forma sólida y ascendente, representan mis
          ambiciones y mi constante crecimiento. El semicírculo, que se abre hacia el futuro, simboliza mi deseo de
          explorar nuevas oportunidades. La combinación de estas formas refleja mi nombre, Carlos Alexander Burgos
          Jaramillo, donde cada elemento visual representa una parte esencial de quién soy.
        </p>
      </section>
      <section class="containers container1">
        <h1>Logo y Definción</h1>
        <img src={Mylogo} alt="logo" />
        <p>Mi logo representa la unión de diferentes facetas de mi personalidad. El círculo azul simboliza mi integridad
          y la búsqueda de un equilibrio en mi vida. Los triángulos, con su forma sólida y ascendente, representan mis
          ambiciones y mi constante crecimiento. El semicírculo, que se abre hacia el futuro, simboliza mi deseo de
          explorar nuevas oportunidades. La combinación de estas formas refleja mi nombre, Carlos Alexander Burgos
          Jaramillo, donde cada elemento visual representa una parte esencial de quién soy.
        </p>
      </section>
      

      <footer>
        {/* <p>paracetamol</p> */}
      </footer>

    </body>
  );
}

export default App;
