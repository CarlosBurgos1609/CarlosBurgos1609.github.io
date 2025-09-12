import './../Style/style.scss';
import Mylogo from './../img/logos/Mylogo.png'
import spotify from './../img/logos/spotify.png'


function Home() {
  return (
    <body>
      <section class="containers container1">
        <h1>Logo y Definción</h1>
        <div class="log flex-row-responsive">
          <div class="logo logo-responsive"><img src={Mylogo} alt="logo" /></div>
          <div class="text text-responsive">
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
      <section class="containers">
        <section class="languages">
          <h1>
            <picture> <img src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Programming_Languages.gif?raw=true" width="50px" />
            </picture>Desarrollo Movil, Juegos y Bases de Datos<picture> <img src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Programming_Languages.gif?raw=true" width="50px" /></picture>
          </h1>
          <div class="wrapper">
            <div class="slider-container">
              <div class="slider-item">
                {/* Android */}
                <a href="https://developer.android.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40" /> </a>
              </div>
              <div class="slider-item">
                {/* Flutter */}
                <a href="https://flutter.dev" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40" /> </a>
              </div>
              <div class="slider-item">
                {/* Dart */}
                <a href="https://dart.dev" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" width="40" height="40" /> </a>
              </div>
              <div class="slider-item">
                {/* React native */}
                <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40" /> </a>
              </div>
              <div class="slider-item">
                {/* Unity */}
                <a href="https://unity.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity" width="40" height="40" /> </a>
              </div>
              <div class="slider-item">
                {/* MongoDb */}
                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" /> </a>
              </div>
              <div class="slider-item">
                {/* MySQL */}
                <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" /> </a>
              </div>
              <div class="slider-item">
                {/* Postgrest */}
                <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" /> </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </body >
  );
}

export default Home;
