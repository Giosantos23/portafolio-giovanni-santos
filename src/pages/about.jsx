import '../styles/about.css'
import CVGiovanniSantos from '../assets/CVGiovanniSantos.pdf'
import cvlogo from '../assets/cvlogo.png'

function About() {

    return (
      <div className="about-page">
        <div className='PDF'>
            <a href={CVGiovanniSantos} download="CVGiovanniSantos.pdf" title='Descargar CV'>
            <img src={cvlogo} alt="Descargar CV" className="download-logo" />

            </a>
        </div>
        <div className="about-container">
          <h4 className='about-text'>
            Mi nombre es Giovanni Santos y <br />  estoy en mi tercer año de
            la carrera de Ingeniería en <br />
            Ciencias de la Computación y Tecnologías de la Información <br />
            en la Universidad del Valle de Guatemala. <br />
            Durante estos tres años he desarrollado <br />
            diferentes habilidades <br />
            dentro y fuera del campo de la computación <br />
            que aplico en mi día a día <br />
            y que quiero seguir mejorando en el campo laboral.
          </h4>
        </div>
      </div>
    );
  }
  
  
  export default About
  