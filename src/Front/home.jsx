import './../Style/style.scss';
import Mylogo from './../img/logos/Mylogo.png'
import spotify from './../img/logos/spotify.png'


function Home() {
  return (
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
      <section class="containers container2">
        <h1><img src={spotify} alt="spotify" /> Mis Playlists <img src={spotify} alt="spotify" /></h1>
        <div class="spotify">
          <div class="img-spotify"><a href="https://open.spotify.com/user/yw3aqvvd0zb5rsjn8wz0kez0j" target="_blank"><img src={spotify} alt="spotify" /></a></div>
          <div class="playlists">
            <iframe src="https://open.spotify.com/embed/playlist/5P6n1BNwogBmLXZqIwlk3e?utm_source=generator" width="100%" height="84" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe src="https://open.spotify.com/embed/playlist/7ARdbqV0W6SQSYyJ0pH3ZY?utm_source=generator" width="100%" height="84" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe src="https://open.spotify.com/embed/playlist/6F2QF1tMHv6U9B8QMn1pbR?utm_source=generator" width="100%" height="84" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
        <div class="buttonplay"><a href="https://carlosburgos1609.github.io/build/#/playlists"><button class="moreplay">Más playlists</button></a></div>
      </section>
    </body >
  );
}

export default Home;
