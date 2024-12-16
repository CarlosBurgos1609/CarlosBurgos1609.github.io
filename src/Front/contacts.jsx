import './../Style/style.scss';
import Mylogo from './../img/logos/Mylogo.png'


function Contacts() {
  return (
    <body>
      <section class="containers">
        <section class="contact">
          <h1>Correo electrónico: caburgos.0325@unicesmag.edu.co</h1>
          <h1>Discord</h1>
        </section>
      </section>
      <section class="containers" >

      <section class="social">
        <p>Carlos</p>
        <img src={Mylogo} alt="logo" />
      </section>
      </section>
    </body >
  );
}
export default Contacts;