import './../Style/style.scss';
import Mylogo from './../img/Mylogo.png'
import spotify from './../img/spotify.png'
// import './Style/style.scss';


function Error() {
    return (<div>
        <body>
      
      <section class="containers container1">
        <h1>Error 404</h1>
        <div class="log">
          <div class="logo"><a href="/build"><img src={Mylogo} alt="logo" /></a></div>
          <div class="text">
            <p>Error 404 pagina no encontrada de click en el logo para volver a la pestaña principal 
            </p>
          </div>

        </div>
      </section>
    </body >
    </div>
    );
}
export default Error;