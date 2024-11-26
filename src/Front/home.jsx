import './../Style/style.scss';
import Mylogo from './../img/Mylogo.png'
import spotify from './../img/spotify.png'
// import './Style/style.scss';


function Home() {
  return (
    <body>
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
      <section class="containers container2">

        <h1><img src={spotify} alt="spotify" /> My playlists <img src={spotify} alt="spotify" /></h1>
        <div class="spotify">
        {/* <iframe src="https://open.spotify.com/embed/playlist/5P6n1BNwogBmLXZqIwlk3e?utm_source=generator" width="70%" height="84" loading="lazy"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/7ARdbqV0W6SQSYyJ0pH3ZY?utm_source=generator" width="70%" height="84"frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/6F2QF1tMHv6U9B8QMn1pbR?utm_source=generator" width="70%" height="84" loading="lazy"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/6F2QF1tMHv6U9B8QMn1pbR?utm_source=generator" width="70%" height="84" loading="lazy"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/6F2QF1tMHv6U9B8QMn1pbR?utm_source=generator" width="70%" height="84" loading="lazy"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/6F2QF1tMHv6U9B8QMn1pbR?utm_source=generator" width="70%" height="84" loading="lazy"></iframe> */}
        <img src={spotify} alt="spotify"/>
        <div class="playlists"></div>
        <iframe src="https://open.spotify.com/embed/playlist/5P6n1BNwogBmLXZqIwlk3e?utm_source=generator" width="85%" height="84" loading="lazy"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/7ARdbqV0W6SQSYyJ0pH3ZY?utm_source=generator" width="85%" height="84"frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/6F2QF1tMHv6U9B8QMn1pbR?utm_source=generator" width="85%" height="84" loading="lazy"></iframe>
        </div>
        
        
        

      </section>
      <section class="containers container1">
        <h1>Logo y Definción</h1>
        <img src={Mylogo} alt="logo" />
        <iframe src="https://open.spotify.com/embed/playlist/5P6n1BNwogBmLXZqIwlk3e?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/6Zyv4Tzir19kAyHXLYgziF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </section>

      
    </body >



  );
}

export default Home;
