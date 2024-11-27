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

        <footer>
            <div>
                <h3>Redes sociales</h3>
                <div class="socialn">
                <a href="https://github.com/CarlosBurgos1609" target="_blank"><img src="https://img.icons8.com/bubbles/50/000000/github.png" alt="GitHub" /></a>
                <a href="#"><img src="https://img.icons8.com/bubbles/50/000000/linkedin.png" alt="LinkedIn" /></a>
                <a href="https://www.facebook.com/profile.php?id=61569174632410"><img src="https://img.icons8.com/bubbles/50/000000/facebook-new.png" alt="Facebook" /></a>
                <a href="https://www.instagram.com/carlitos_burgosj/"><img src="https://img.icons8.com/bubbles/50/000000/instagram.png" alt="Instagram" /></a>
                <a href="https://www.youtube.com/@solracb/playlists"><img src="https://img.icons8.com/bubbles/50/000000/youtube.png" alt="Youtube" /></a>
                <a href="https://open.spotify.com/user/yw3aqvvd0zb5rsjn8wz0kez0j"><img src="https://img.icons8.com/bubbles/50/000000/spotify.png" alt="Spotify" /></a>
                </div>
            </div>
        </footer>
    </div>;
}
export default Layout;