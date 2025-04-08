// import { UseState } from 'react';
import { Link, Outlet } from "react-router-dom";
import Mylogo from './../img/logos/Mylogo.png'
import menu from './../img/menu.png'

const Layout = () => {
    // const [theme, setTheme] = UseState("light");

    // const switchTheme = () =>
    //     theme === "light" ? setTheme("dark") : setTheme("light");
    // const icon = theme === "light" ? sun : moon;

    return <div> 
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
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/languages">Lenguajes</Link></li>
                    <li><Link to="/aplicactions">Aplicaciones</Link></li>
                    <li><Link to="/certificates">Certificados</Link></li>
                    {/* <li><Link to="/works">Trabajos</Link></li> */}
                    <li><Link to="/contacts">Contactos</Link></li>
                    {/* <li><Link to="/socialNetworks">Redes sociales</Link></li> */}
                    <li><Link to="/playlists">PlayLists</Link></li>
                    {/* <li>
                        <img src={icon} alt="dark" onClick={switchTheme} />
                    </li> */}

                    {/* <a href="#" class="btn"><button class="rounded">Iniciar sesión</button></a>
                    <a href="#" class="btn"><button class="rounded">Registrarse</button></a> */}
                </ul>
            </nav>
        </div>
    </header>
    <div class="part">
      <p>cab</p>
    </div>
        <Outlet />

        <footer>
            <div>
                <h3>Redes sociales</h3>
                <div class="socialn">
                    <a href="https://github.com/CarlosBurgos1609" target="_blank"><img src="https://dmhyuogexgghinvfgoup.supabase.co/storage/v1/object/public/icons//github.png" alt="GitHub" /></a>
                    <a href="https://www.linkedin.com/in/carlos-alexander-burgos-jaramillo-3171b533a/"target="_blank"><img src="https://dmhyuogexgghinvfgoup.supabase.co/storage/v1/object/public/icons//linkedin.png" alt="LinkedIn" /></a>
                    <a href="https://www.facebook.com/profile.php?id=61569174632410" target="_blank"><img src="https://dmhyuogexgghinvfgoup.supabase.co/storage/v1/object/public/icons//facebook-new.png" alt="Facebook" /></a>
                    <a href="https://www.instagram.com/carlitos_burgosj/" target="_blank"><img src="https://dmhyuogexgghinvfgoup.supabase.co/storage/v1/object/public/icons//instagram.png" alt="Instagram" /></a>
                    <a href="https://www.youtube.com/@solracb/playlists"target="_blank"><img src="https://dmhyuogexgghinvfgoup.supabase.co/storage/v1/object/public/icons//youtube.png" alt="Youtube" /></a>
                    <a href="https://open.spotify.com/user/yw3aqvvd0zb5rsjn8wz0kez0j"target="_blank"><img src="https://dmhyuogexgghinvfgoup.supabase.co/storage/v1/object/public/icons//spotify.png" alt="Spotify" /></a>
                </div>
            </div>
        </footer>
    </div>;
}
export default Layout;