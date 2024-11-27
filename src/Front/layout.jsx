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
                    <li><Link to="/build">Inicio</Link></li>
                    <li><Link to="Languages">Lenguajes</Link></li>
                    <li><Link to="Aplicactions">Aplicaciones</Link></li>
                    <li><Link to="Certificates">Certificados</Link></li>
                    <li><Link to="Works">Trabajos</Link></li>
                    <li><Link to="Contacts">Contactos</Link></li>
                    <li><Link to="SocialNetworks">Redes sociales</Link></li>
                    <li><Link to="PlayLists">PlayLists</Link></li>
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