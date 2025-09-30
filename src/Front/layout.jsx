// import { UseState } from 'react';
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import Mylogo from './../img/logos/Mylogo.png'
import menu from './../img/menu.png'

const Layout = () => {
    const [theme, setTheme] = useState('light');
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        // Detectar preferencia del sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
        setTheme(savedTheme);
        
        // Aplicar el tema al body para que afecte toda la aplicación
        document.body.setAttribute('data-theme', savedTheme);
        
        // Escuchar cambios en la preferencia del sistema
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
                document.body.setAttribute('data-theme', newTheme);
            }
        };
        
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Effect para manejar el botón de scroll to top
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    // Función para navegación suave a secciones
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Función para scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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
                    <li>
                        <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#lenguajes" onClick={(e) => { e.preventDefault(); scrollToSection('lenguajes'); }}>
                            Lenguajes
                        </a>
                    </li>
                    <li>
                        <a href="#aplicaciones" onClick={(e) => { e.preventDefault(); scrollToSection('aplicaciones'); }}>
                            Aplicaciones
                        </a>
                    </li>
                    
                    <li>
                        <a href="#contactos" onClick={(e) => { e.preventDefault(); scrollToSection('contactos'); }}>
                            Mi música
                        </a>
                    </li>
                    <li>
                        <a href="#playlists" onClick={(e) => { e.preventDefault(); scrollToSection('playlists'); }}>
                            PlayLists
                        </a>
                    </li>
                    <li>
                        <a href="#certificados" onClick={(e) => { e.preventDefault(); scrollToSection('certificados'); }}>
                            Certificados
                        </a>
                    </li>
                    <li className="theme-toggle-nav">
                        <div className="theme-toggle-container" onClick={toggleTheme}>
                            <div className={`theme-toggle-switch ${theme}`}>
                                <div className="theme-toggle-track">
                                    <div className="theme-toggle-track-light">
                                        <div className="logo-icon light-logo">
                                            <img src={Mylogo} alt="Light mode" />
                                        </div>
                                        <div className="clouds"></div>
                                    </div>
                                    <div className="theme-toggle-track-dark">
                                        <div className="logo-icon dark-logo">
                                            <img src={Mylogo} alt="Dark mode" />
                                        </div>
                                        <div className="stars">
                                            <div className="star"></div>
                                            <div className="star"></div>
                                            <div className="star"></div>
                                            <div className="star"></div>
                                            <div className="star"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="theme-toggle-thumb">
                                    <div className="thumb-icon">
                                        <img src={Mylogo} alt="Theme toggle" className={`thumb-logo ${theme}`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

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

        {/* Scroll to Top Button */}
        {showScrollTop && (
            <button 
                className={`scroll-to-top ${theme}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <polyline points="18,15 12,9 6,15"></polyline>
                </svg>
            </button>
        )}

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