import './../Style/style.scss';
import cpp from './../img/cpp.png'
import css from './../img/css.png'




// import './Style/style.scss';


function languages() {
  return (
    <body>
      <div class="part">
        <p>cab</p>
      </div>
      <section class="containers">
        <section class="languages">
          <h1>
            <picture> <img src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Programming_Languages.gif?raw=true" width="50px" />
            </picture> Lenguajes de programación<picture> <img src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Programming_Languages.gif?raw=true" width="50px" /></picture></h1>
          <div class="wrapper">
            <div class="slider-container">
              <div class="slider-item">
                <img src={cpp} alt="" />
              </div>
              <div class="slider-item">
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="70" height="70" />
                </a>
              </div>

            </div>
          </div>
        </section>
      </section>
    </body>
  );
}
export default languages;