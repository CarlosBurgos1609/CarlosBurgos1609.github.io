import { UseState } from 'react';
import { Link, Outlet } from "react-router-dom";
import moon from './../img/oscuro.png'
import sun from './../img/claro.png'
import './../Style/style.scss'
import Mylogo from './../img/Mylogo.png'
import menu from './../img/menu.png'

const Layout = () => {
    // const [theme, setTheme] = UseState("light");

    // const switchTheme = () =>
    //     theme === "light" ? setTheme("dark") : setTheme("light");
    // const icon = theme === "light" ? sun : moon;

    return <div> <header class="header" >
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
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/languages">Lenguajes</Link></li>
                    <li><Link to="#">Aplicaciones</Link></li>
                    <li><Link to="#">Certificados</Link></li>
                    <li><Link to="#">Trabajos</Link></li>
                    <li><Link to="#">Contactos</Link></li>
                    <li><Link to="#">Redes sociales</Link></li>
                    {/* <li>
                        <img src={icon} alt="dark" onClick={switchTheme} />
                    </li> */}

                    {/* <a href="#" class="btn"><button class="rounded">Iniciar sesión</button></a>
                    <a href="#" class="btn"><button class="rounded">Registrarse</button></a> */}
                </ul>
            </nav>
        </div>
    </header>
    <Outlet />
    </div>;
}
export default Layout;