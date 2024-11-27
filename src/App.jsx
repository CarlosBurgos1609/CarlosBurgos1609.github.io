import { useState } from 'react';
import Mylogo from './img/Mylogo.png'
import menu from './img/menu.png'
import moon from './img/oscuro.png'
import sun from './img/claro.png'
import  './Style/style.scss'



function App() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  const icon = theme === "light" ? sun : moon;

  return (
    <header class="header" >
      <div class="menu container ">
        <div class="logo">
          <a href="index.html">
            <img src={Mylogo} className="App-logo" alt="logo" />
          </a>
        </div>

        <input type="checkbox" id="menu" />
        <label for="menu">
          <img src={menu} alt="icon-menu" class='App-logo' />
        </label>

        <nav class="nav-list">
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="index.html">Lenguajes</a></li>
            <li><a href="#">Aplicaciones</a></li>
            <li><a href="#">Certificados</a></li>
            <li><a href="#">Trabajos</a></li>
            <li><a href="#">Contactos</a></li> 
            <li><a href="#">Redes sociales</a></li>
            <li>
              <img src={icon} alt="dark" onClick={switchTheme} />
            </li>

            {/* <a href="#" class="btn"><button class="rounded">Iniciar sesión</button></a>
                 <a href="#" class="btn"><button class="rounded">Registrarse</button></a> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default App;
