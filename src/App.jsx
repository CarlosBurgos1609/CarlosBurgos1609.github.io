import './Style/style.scss';
import Mylogo from './img/Mylogo.png'
import menu from './img/menu.png'
import home from './Front/home.jsx'
// import './Style/style.scss';


function App() {
  return (


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
              <li><a href="Front/contacts.html">Redes sociales</a></li>

              {/* <a href="#" class="btn"><button class="rounded">Iniciar sesión</button></a>
                <a href="#" class="btn"><button class="rounded">Registrarse</button></a> */}
            </ul>
          </nav>

        </div>

      </header>
    </div>

  );
}

export default App;
