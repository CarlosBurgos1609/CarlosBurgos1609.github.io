import './../Style/style.scss';
import Mylogo from './../img/logos/Mylogo.png'

function Error() {
    return (<div>
        <body>
      <section class="containers">
        <section class="default">
        <h1>Error 404</h1>
        <div class="log">
          <div class="logo"><a href="/build"><img src={Mylogo} alt="logo" /></a></div>
          <div class="text">
            <p>Pagina no encontrada de click en el logo para volver a la pestaña principal</p>
          </div>
        </div>
        </section>
      </section>
    </body >
    </div>
    );
}
export default Error;